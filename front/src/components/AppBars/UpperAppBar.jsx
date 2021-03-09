import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { IconButton } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { DeleteRounded, ArrowBackRounded } from "@material-ui/icons/";

const useStyles = makeStyles((theme) => ({
  root: {
    position: (props) =>
      props.pathname === "/product" ? "absolute" : "static",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2, 0),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  flexGrow: {
    flexGrow: 2,
  },
}));

export default function SearchAppBar() {
  const classes = useStyles(useLocation());
  const history = useHistory();

  const handleClick = () => {
    history.replace("/store");
  };

  return (
    <>
      <div className={classes.root}>
        <IconButton aria-label="back" onClick={handleClick}>
          <ArrowBackRounded fontSize="inherit" color="primary" />
        </IconButton>

        <IconButton color="inherit" aria-label="delete">
          <DeleteRounded fontSize="inherit" />
        </IconButton>
      </div>
    </>
  );
}