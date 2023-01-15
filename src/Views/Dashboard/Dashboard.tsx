import React from "react";

export default function Dashboard() {
  const user = localStorage.getItem("user");
  return <h1>Hello {user} this is the dashboard</h1>;
}
