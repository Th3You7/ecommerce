import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import { UpperAppBar } from "../components";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  allProductsAction,
  currSelProdAction,
} from "../actions/productsAction";

const useStyles = makeStyles((theme) => ({
  root: {
    //padding: theme.spacing(2),
    height: "100vh",
  },

  container: {
    height: 580,
    width: "90%",
    margin: theme.spacing(0, "auto"),
  },
}));

const columns = [
  { field: "id", hide: true },
  { field: "name", headerName: "Products", width: 150 },
  { field: "price", headerName: "Price", width: 70 },
  { field: "category", headerName: "Status", width: 100 },
];

export default function AllProductsScreen() {
  const classes = useStyles();
  const [id, setId] = useState(null);
  const [page, setPage] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  const { products, fetching, error } = useSelector(
    (state) => state.allProductsReducer
  );

  useEffect(() => {
    dispatch(allProductsAction());
  }, [dispatch]);

  const handleBack = () => {
    history.replace("/admin");
  };

  const handleAdd = () => {
    history.push("/admin/add");
  };

  const to = {
    pathname: `/admin/remove/${id}`,
  };

  return (
    <div className={classes.root}>
      <UpperAppBar
        handleBack={handleBack}
        handleAdd={handleAdd}
        id={id}
        to={to}
      />
      {error && error}

      {products && (
        <div className={classes.container}>
          <DataGrid
            page={page}
            onPageChange={(params) => {
              setPage(params.page);
            }}
            disableColumnMenu={true}
            pageSize={10}
            columns={columns}
            onRowSelected={(row) => {
              setId(row.data.id);
              dispatch(currSelProdAction(row.data));
            }}
            //onSelectionModelChange={(row) => setId(null)}
            rows={products}
            loading={fetching}
            getRowId={(row) => row._id}
            disableColumnSelector={true}
            //   components={{
            //     Toolbar: customToolBar,
            //   }}
          />
        </div>
      )}
    </div>
  );
}
