import { mount as mountMarketingApp } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const appRef = useRef(null);
  const history = useHistory();

  const onNavigate = ({ pathname: nextPathname }) => {
    if (nextPathname !== history.location.pathname) history.push(nextPathname);
  };

  useEffect(() => {
    const { onParentNavigate } = mountMarketingApp(appRef.current, {
      onNavigate,
      initialPath: history.location.pathname,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div id="container-marketing-app-wrapper" ref={appRef} />;
};
