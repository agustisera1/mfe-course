import { mount as mountMarketingApp } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export const MarketingAppInstance = () => {
  const appRef = useRef(null);

  useEffect(() => mountMarketingApp(appRef.current), []);

  return <div id="container-marketing-app-wrapper" ref={appRef} />;
};
