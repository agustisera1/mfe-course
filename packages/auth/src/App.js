import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import SignUp from "../components/Signup";
import SignIn from "../components/Signin";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default function App({ history: memoryHistory }) {
  return (
    <>
      <Router history={memoryHistory}>
        <StylesProvider generateClassName={generateClassName}>
          <Switch>
            <Route path="/auth/signin" component={SignIn} />
            <Route path="/auth/signup" component={SignUp} />
          </Switch>
        </StylesProvider>
      </Router>
    </>
  );
}
