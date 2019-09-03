import React, { useState, useEffect } from "react";
import FormUserDetails from "./FormUserDetails";
import UserProfessional from "./UserProfessional";
import axios from "axios";

export default function UserForm() {
  // // useEffect(() => {}, []);
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
    // setStage(prevCount => prevCount + 1);
    console.log("stage is ", stage);
  }
  const form_data = {
    user_id: "10",
    nic: "965542512V",

    email: "test@.com",
    gender: "Male",
    first_name: "Xavi",
    last_name: "Melo",
    role: "Admin"
  };
  const handleSubmit = async () => {
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
  }
}
