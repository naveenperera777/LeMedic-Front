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
          <InputLabel htmlFor="name">Complain</InputLabel>
          <Input
            id="name"
            type="text"
            // value={props.name}
            onChange={props.handleSymptomChange}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Signs</InputLabel>
          <Input id="name" type="text" />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">General Examination</InputLabel>
          <Input id="name" type="text" />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Systemic Examination</InputLabel>
          <Input id="name" type="text" />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Investigation</InputLabel>
          <Input id="name" type="text" />
        </FormControl>
      </form>
    </div>
  );
}
