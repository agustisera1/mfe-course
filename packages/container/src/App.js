import React from "react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import { MarketingAppInstance } from "./MarketingAppInstance";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({ productionPrefix: "co" });

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingAppInstance />;
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
