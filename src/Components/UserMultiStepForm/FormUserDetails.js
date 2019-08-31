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
    marginLeft: 400,
    marginBottom: 30,
    marginTop: 100
  }
});

export default function FormUserDetails(props) {
  const classes = useStyles();

  useEffect(() => {}, []);
  const [text, setText] = useState("");
  const [open, setOpen] = React.useState(false);

  function handleOnChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <form className={classes.form}>
        <h1>Register Patient{props.textval}</h1>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            id="name"
            type="text"
            value={props.textval}
            onChange={props.handleChange}
          />
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" type="email" />
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          size="medium"
          onClick={props.stage}
        >
          Next
        </Button>
      </form>
    </div>
  );
}
