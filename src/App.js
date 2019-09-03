import React from "react";
import Navbar from "./Components/navbar";
import Appointment from "./Components/appointment";
import Drawer from "./Components/drawer";
import UserList from "./Components/userList";
import RegisterPatient from "./Components/registerPatient";
import UserProfile from "./Components/userProfile";
import Welcome from "./Components/welcome";
import UserForm from "./Components/UserMultiStepForm/UserForm";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Drawer />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/register" component={RegisterPatient} />
          <Route path="/usermgt" exact component={UserList} />
          <Route path="/usermgt/id" component={UserProfile} />
          <Route path="/usermgt/create" component={UserForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
