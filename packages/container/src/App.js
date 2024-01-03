import React, { lazy, Suspense, useState, useEffect } from "react";
import Header from "./Header";
import {
  BrowserRouter,
  Route,
  Switch,
  Router,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from "history";

const Marketing = lazy(() => import("./MarketingAppInstance"));
const Auth = lazy(() => import("./AuthAppInstance"));
const Dashboard = lazy(() => import("./DashboardInstance"));

import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Progress from "../Progress";

const generateClassName = createGenerateClassName({ productionPrefix: "co" });
const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) history.push("/dashboard");
  }, [isSignedIn]);
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <Auth onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/"/>}
                <Dashboard />
              </Route>
              <Route path="/" component={Marketing} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
