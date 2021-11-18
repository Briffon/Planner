import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Landing from "../Pages/Landing";
import Calendar from "../Pages/Calendar";

const Routes = () => {
  const location = useLocation();
  return (
    <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={Landing} />
      <Route exact path="/Calendar" component={Calendar} />
    </Switch>
  );
};
export default Routes;
