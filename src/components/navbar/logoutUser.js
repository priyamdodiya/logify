export const logoutUser = (setLoggedInUser, navigate) => {
    setLoggedInUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/signin");
  };
  