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
  },
  followup: {
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
          <InputLabel htmlFor="consultationFee">Consultation Fees</InputLabel>
          <Input id="consultationFee" type="text" 
            onChange={props.handlePricingChange("consultationFee")}
            value={props.pricingData.consultationFee}
          />
        </FormControl>
      </form>
      <form className={classes.form}>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="medicationFee">Fees for Medications (Optional)</InputLabel>
          <Input id="medicationFee" type="text" 
            onChange={props.handlePricingChange("medicationFee")}
            value={props.pricingData.medicationFee}
          />
        </FormControl>
      </form>
      <form className={classes.form}>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="tax">Tax Percentage (Optional)</InputLabel>
          <Input id="tax" type="text" 
            onChange={props.handlePricingChange("tax")}
            value={props.pricingData.tax}
          />
        </FormControl>
      </form>
      <form className={classes.form}>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="miscellaneous">Miscellaneous (Optional)</InputLabel>
          <Input id="miscellaneous" type="text" 
                      onChange={props.handlePricingChange("miscellaneous")}
            value={props.pricingData.miscellaneous}
          />
        </FormControl>
      </form>
      <form className={classes.followup}>
      <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="total">Total </InputLabel>
          <Input id="total" type="text" 
                      onChange={props.handlePricingChange("total")}
            value={props.pricingData.total}
          />
        </FormControl>
      </form>
    </div>
  );
}
