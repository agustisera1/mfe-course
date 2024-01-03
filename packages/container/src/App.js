import React, { lazy, Suspense } from "react";
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
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={Auth} />
              <Route path="/" component={Marketing} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
