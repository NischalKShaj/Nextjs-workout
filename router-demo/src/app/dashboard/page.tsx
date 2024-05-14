// file to create a client component
"use client";
import { useState } from "react";

const Dashboard = () => {
  const [name, setName] = useState("");
  console.log("dashboard component for the client");
  return (
    <div>
      <h1>Dashboard page</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello {name} !</p>
    </div>
  );
};

export default Dashboard;
