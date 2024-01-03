import { mount as mountAuthApp } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const AuthAppInstance = () => {
  const appRef = useRef(null);
  const history = useHistory();
  const onNavigate = ({ pathname: nextPathname }) => {
    if (nextPathname !== history.location.pathname) history.push(nextPathname);
  };

  useEffect(() => {
    const { onParentNavigate } = mountAuthApp(appRef.current, {
      onNavigate,
      initialPath: history.location.pathname,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div id="container-auth-app-wrapper" ref={appRef} />;
};
