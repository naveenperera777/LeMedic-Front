import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export default function ControlledExpansionPanels(props) {
  const patient_id = props.selected_patient.patient_id;
  console.log("Patient object ",props.selected_patient)
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [medical_records, setMedical_records] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:9090/record/patient/${patient_id}/all`
      );
      setMedical_records(result.data.data);
      console.log("medical records", medical_records);
    };
    fetchData();
  }, []);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log("medical records", medical_records.length);

  if (!medical_records.length == 0) {    
  return (
    <div className={classes.root}>
        {medical_records.map(record => {
        // <li key={station.symptoms}> {station.symptoms} </li>;
        return (
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
                {record.medications}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                {record.medications}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </div>
  );
  } else {
  return (<div>
    <h1>
    No Records Found!   
    </h1>
  </div>)
}

  

}
