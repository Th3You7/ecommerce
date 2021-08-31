import React from "react";
import { ProductCard, UpperAppBar, CheckingAppBar } from "../components";
import { makeStyles, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { removeAllAction } from "../actions/cartAction";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    position: "relative",
    paddingBottom: theme.spacing(8),
  },
  product: {
    width: "90%",
    margin: "0 auto",
  },
  total: {
    width: "90%",
    margin: "8px auto 0",
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const Cart = () => {
  const classes = useStyles();
  const { products } = useSelector((state) => state.cartReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  const subTotal = products.reduce(
    (acc, curr) =>
      acc +
      Number(curr.soldPrice) *
        Object.keys(curr.size).reduce((a, c) => a + curr.size[c], 0),
    0
  );
  const earning = () => {
    const prices = products.reduce(
      (acc, curr) =>
        acc +
        Number(curr.price) *
          Object.keys(curr.size).reduce((a, c) => a + curr.size[c], 0),
      0
    );
    return subTotal - prices;
  };

  const handleBack = () => {
    history.push("/store");
  };

  const handleRemove = () => {
    dispatch(removeAllAction());
  };

  const handleCheck = () => {
    if (!products.length) return;
    history.push("/confirm");
  };

  // const unduplicated = (arr) =>
  //   arr.filter((v, i, s) => i === s.findIndex((va) => va._id === v._id));

  return (
    <div className={classes.root}>
      <UpperAppBar handleBack={handleBack} handleRemove={handleRemove} />
      <div>
        {products &&
          products.map((product, index) => (
            <div className={classes.product} key={index}>
              <ProductCard
                id={product._id}
                title={product.name}
                price={product.price}
                size={product.size}
                img={product?.img?.url}
                soldPrice={product.soldPrice}
              />
            </div>
          ))}
      </div>
      <div className={classes.total}>
        <div>
          <Typography component="span" variant="body2">
            Earning:{" "}
          </Typography>
          <Typography component="span" variant="body1">
            {earning()}DH
          </Typography>
        </div>
        <div>
          <Typography component="span" variant="body2">
            Subtotal:{" "}
          </Typography>
          <Typography component="span" variant="body1">
            {subTotal}DH
          </Typography>
        </div>
      </div>
      <CheckingAppBar handleCheck={handleCheck} />
    </div>
  );
};

export default Cart;
