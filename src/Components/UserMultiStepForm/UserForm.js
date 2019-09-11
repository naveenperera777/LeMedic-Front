import React, { useState, useEffect } from "react";
import FormUserDetails from "./FormUserDetails";
import UserProfessional from "./UserProfessional";
import axios from "axios";
import { Route, Redirect } from "react-router";

export default function UserForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const [stage, setStage] = useState(0);

  function handleNameChange(event) {
    setName(event.target.value);

    console.log("name", name);
  }

  function handleRoleChange(event) {
    setRole(event.target.value);
    console.log("role", role);
  }

  function handleStage() {
    setStage(stage + 1);
    console.log("stage is ", stage);
  }
  const form_data = {
    nic: "945242512V",
    email: "test@.com",
    gender: "Male",
    first_name: name,
    last_name: "Jr.",
    role: role
  };
  const handleSubmit = async () => {
    setStage(stage + 1);

    const response = await axios({
      method: "post",
      url: "http://localhost:9090/users/add",
      data: form_data
    });
  };

  if (stage == 0) {
    return (
      <div>
        <FormUserDetails
          handleNameChange={handleNameChange}
          name={name}
          stage={handleStage}
        />
      </div>
    );
  } else if (stage == 1) {
    return (
      <div>
        <UserProfessional
          handleRoleChange={handleRoleChange}
          role={role}
          handleSubmit={handleSubmit}
        />
      </div>
    );
  } else {
    return <Redirect to="/usermgt" />;
  }
}
