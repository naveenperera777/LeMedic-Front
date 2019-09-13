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
import StepperConsultation from "./StepperConsultation";

export default function CustomizedTables(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      height: 430,
      marginTop: 75,
      marginLeft: 300,
      marginRight: 30,
      display: "grid",
      overflowX: "auto",
      padding: 20
    },
    stepper: {
      height: 200,
      marginTop: 10,
      marginLeft: 300,
      marginRight: 30,
      display: "grid",
      overflowX: "auto",
      padding: 20
    }
  }));

  const [stepperState, setstepperState] = useState(0);

  useEffect(() => {}, []);

  const classes = useStyles();

  function ChangeNextStepperState() {
    setstepperState(stepperState + 1);
  }

  function ChangeBackStepperState() {
    setstepperState(stepperState - 1);
  }

  return (
    <div>
      <Paper className={classes.root}>
        <SearchBarConsultation currentStepperState={stepperState} />
      </Paper>
      <Paper className={classes.stepper}>
        <StepperConsultation
          stepperNextFunc={ChangeNextStepperState}
          stepperBackFunc={ChangeBackStepperState}
        />
      </Paper>
    </div>
  );
}
