import { mount as mountDashboard } from "dashboard/DashboardApp";
import React, { useEffect, useRef } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mountDashboard(ref.current);
  }, []);

  return <div ref={ref} />;
};
