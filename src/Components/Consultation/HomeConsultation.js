import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import deburr from "lodash/deburr";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "@material-ui/core/Popper";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  NavLink
} from "react-router-dom";
import { Route, Redirect } from "react-router";
import SearchBarConsultation from "./SearchBarConsultation";

export default function CustomizedTables(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      // width: "100%",
      marginTop: 100,
      marginLeft: 300,
      marginRight: 30,
      display: "grid",
      overflowX: "auto",
      padding: 20
    }
  }));

  const [data, setData] = useState([]);

  useEffect(() => {}, []);

  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <SearchBarConsultation />
      </Paper>
    </div>
  );
}
