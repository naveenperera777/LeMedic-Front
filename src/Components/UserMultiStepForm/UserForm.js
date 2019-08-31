import React, { useState, useEffect } from "react";
import FormUserDetails from "./FormUserDetails";

export default function UserForm() {
  // // useEffect(() => {}, []);
  const [text, setText] = useState("");
  const [stage, setStage] = useState(0);

  function handleChange(event) {
    setText(event.target.value);
    console.log("event", text);
  }

  function handleStage() {
    setStage(1);
    console.log("stage is ", stage);
  }

  if (stage == 0) {
    return (
      <div>
        <FormUserDetails
          handleChange={handleChange}
          textval={text}
          stage={handleStage}
        />
      </div>
    );
  } else if (stage == 1) {
    return (
      <div>
        <h1></h1>
      </div>
    );
  }
}
