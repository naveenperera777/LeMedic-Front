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
    marginTop: 100
  }
});

export default function FormUserDetails(props) {
  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <div>
      <form className={classes.form}>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Diagnosis</InputLabel>
          <Input id="name" type="text" value={props.record.symptoms} />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Medications</InputLabel>
          <Input id="name" type="text" value={props.record.medication} />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Pricing</InputLabel>
          <Input id="name" type="text" value={props.record.pricing} />
        </FormControl>
      </form>
    </div>
  );
}
