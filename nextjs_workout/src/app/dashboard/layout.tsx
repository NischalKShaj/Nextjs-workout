// file to show the layouts

const DashboardLayouts = ({
  children,
  notification,
  users,
  revenue,
  login,
}: {
  children: React.ReactNode;
  notification: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLogin = true;
  return isLogin ? (
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
  ) : (
    <div>{login}</div>
  );
};

export default DashboardLayouts;
