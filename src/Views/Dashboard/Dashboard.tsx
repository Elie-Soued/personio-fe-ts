import React from "react";

export default function Dashboard() {
  const user = localStorage.getItem("user");
  return <h1>Hello {user}</h1>;
}
