// file to show the layouts

import React from "react";

const DashboardLayouts = ({
  children,
  notification,
  users,
  revenue,
}: {
  children: React.ReactNode;
  notification: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
}) => {
  return (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notification}</div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
