import React, { useEffect, useState } from "react";
import deburr from "lodash/deburr";
import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "@material-ui/core/Popper";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import PatientProfile from "./PatientProfile";
import { func } from "prop-types";
import ExpansionPanelConsultation from "./ExpansionPanelConsultation";
import DiagnosisConsultation from "./DiagnosisConsultation";
import MedicationsConsultation from "./MedicationsConsultation";
import PricingConsultation from "./PricingConsultation";
import ConfirmationConsultation from "./Confirmation.js";

let suggestions = [];
// let selected_user = [];
let selected_user = {};

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input
        }
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const full_name =
    suggestion.first_name + " " + suggestion.last_name + " " + suggestion.nic;
  const matches = match(full_name, query);
  const parts = parse(full_name, matches);

  // const matches = match(suggestion.first_name, query);
  // const parts = parse(suggestion.first_name, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map(part => (
          <span
            key={part.text}
            style={{ fontWeight: part.highlight ? 500 : 400 }}
          >
            {part.text}
          </span>
        ))}
      </div>
    </MenuItem>
  );
}

function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.first_name.slice(0, inputLength).toLowerCase() ===
            inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  // selected_user.push(suggestion);
  // console.log("select", selected_user);
  selected_user = suggestion;
  return suggestion.last_name;
}

const useStyles = makeStyles(theme => ({
  root: {
    height: 250,
    flexGrow: 1
  },
  container: {
    position: "relative"
  },
  suggestionsContainerOpen: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  },
  suggestion: {
    display: "block"
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none"
  },
  divider: {
    height: theme.spacing(2)
  }
}));

export default function IntegrationAutosuggest(props) {
  const [data, setData] = useState("text");
  let stepperState = props.currentStepperState;
  // let stepperState = 4;

  console.log("searchstate", props.currentStepperState);

  useEffect(() => {
    console.log("searchstateuseeffect", props.currentStepperState);

    const fetchData = async () => {
      const result = await axios("http://localhost:9090/users");
      suggestions = result.data.data;
      console.log("suggestions", suggestions);
    };
    fetchData();
  }, [props]);

  const classes = useStyles();
  const [state, setState] = React.useState({
    single: "",
    popper: ""
  });
  const [record, setRecord] = React.useState({
    symptoms: "",
    medication: ""
  });
  const [Diagnosis, setDia] = useState("");

  const [stateSuggestions, setSuggestions] = React.useState([]);

  const handleSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleChange = name => (event, { newValue }) => {
    console.log("state", newValue);

    setState({
      ...state,
      [name]: newValue
    });
  };

  function handleMedicalRecordChange(event) {
    // console.log("event", event.target.id);
    // switch(event.target.id){
    //   case
    // }
    // setRecord({
    //   symptoms: event.target.value
    // });
  }

  const autosuggestProps = {
    renderInputComponent,
    suggestions: stateSuggestions,
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion
  };
  switch (stepperState) {
    case 0:
      return (
        <div className={classes.root}>
          <Autosuggest
            {...autosuggestProps}
            inputProps={{
              classes,
              id: "react-autosuggest-simple",
              // label: "Country",
              placeholder: "Enter a Patient Name ...",
              value: state.single,
              onChange: handleChange("single")
            }}
            theme={{
              container: classes.container,
              suggestionsContainerOpen: classes.suggestionsContainerOpen,
              suggestionsList: classes.suggestionsList,
              suggestion: classes.suggestion
            }}
            renderSuggestionsContainer={options => (
              <Paper {...options.containerProps} square>
                {options.children}
              </Paper>
            )}
          />
          <PatientProfile selected_user={selected_user} />
        </div>
      );
    case 1:
      return (
        <div>
          <ExpansionPanelConsultation selected_patient={selected_user} />
        </div>
      );
    case 2:
      return (
        <div>
          <h1>Diagnosis</h1>
          <DiagnosisConsultation
          // handleSymptomChange={handleSymptomChange}
          />
        </div>
      );
    case 3:
      return (
        <div>
          <h1>Treatment</h1>
          <MedicationsConsultation
          // handleMedicationChange={handleMedicationChange}
          />
        </div>
      );
    case 4:
      return (
        <div>
          <h1>Pricing</h1>
          <PricingConsultation />
        </div>
      );
    case 5:
      return (
        <div>
          <h1>Confirmation</h1>
          <ConfirmationConsultation record={record} diagnosis={Diagnosis} />
        </div>
      );
  }
}
