import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { loggedInUser } = useContext(UserContext);

  return loggedInUser ? children : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
