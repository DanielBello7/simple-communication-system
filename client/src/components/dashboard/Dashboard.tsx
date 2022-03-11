

import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Dashboard() {
  const userContext = useContext(UserContext);
  return (
    <React.Fragment>
      <h1>Dashboard</h1>
      <button onClick={() => userContext?.LogoutUser()}>Logout</button>
    </React.Fragment>
  )
}
