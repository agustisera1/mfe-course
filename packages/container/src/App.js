import React, { lazy, Suspense, useState } from "react";
import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Marketing = lazy(() => import("./MarketingAppInstance"));
const Auth = lazy(() => import("./AuthAppInstance"));

import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Progress from "../Progress";

const generateClassName = createGenerateClassName({ productionPrefix: "co" });

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <BrowserRouter>
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

              <Route path="/" component={Marketing} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
