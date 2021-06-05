import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notfound from "./pages/NotFound";
import Resume from "./pages/Resume";
import Resume2 from "./pages/Resume2";
import FormSkills from "./components/resume2/skill/FormSkills";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/resume2" component={Resume2} />
      <Route exact path="/formskill" component={FormSkills} />
      <Route component={Notfound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
