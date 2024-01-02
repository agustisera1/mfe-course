import React from "react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import { MarketingAppInstance } from "./MarketingAppInstance";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingAppInstance />;
      </div>
    </BrowserRouter>
  );
};
