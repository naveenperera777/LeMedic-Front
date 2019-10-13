// import React, { useState, useEffect } from "react";
import React, { useEffect, useState } from "react";

import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    maxWidth: 345,
    marginLeft: 100,
    marginBottom: 30,
    marginTop: 10
  }
});

export default function FormUserDetails(props) {
  const classes = useStyles();

  useEffect(() => {
    console.log("handleChangeDiagnosis", state.complain);
  }, []);

  const [state, setState] = React.useState({
  });

  return (
    <div>
      <form className={classes.form}>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Complain</InputLabel>
          <Input
            id="complain"
            type="text"
            onChange={props.handleDiagnosisChange("complain")}
            value={props.diagnosisData.complain}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Signs</InputLabel>
            <Input
            id="signs"
            type="text"
            onChange={props.handleDiagnosisChange("signs")}
            value={props.diagnosisData.signs}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">General Examination</InputLabel>
            <Input
            id="general"
            type="text"
            onChange={props.handleDiagnosisChange("general")}
            value={props.diagnosisData.general}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Systemic Examination</InputLabel>
                  <Input
            id="systemic"
            type="text"
            onChange={props.handleDiagnosisChange("systemic")}
            value={props.diagnosisData.systemic}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Investigation</InputLabel>
                  <Input
            id="investigation"
            type="text"
            onChange={props.handleDiagnosisChange("investigation")}
            value={props.diagnosisData.investigation}
          />
        </FormControl>
      </form>
    </div>
  );
}
