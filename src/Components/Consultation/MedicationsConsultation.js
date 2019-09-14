import React, { useState, useEffect } from "react";
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

  useEffect(() => {}, []);

  return (
    <div>
      <form className={classes.form}>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Medical Management</InputLabel>
          <Input
            id="name"
            type="text"
            // value={props.name}
            onChange={props.handleMedicationChange}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Surgical Management (Optional)</InputLabel>
          <Input id="name" type="text" />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Special Remarks (Optional)</InputLabel>
          <Input id="name" type="text" />
        </FormControl>
      </form>
    </div>
  );
}
