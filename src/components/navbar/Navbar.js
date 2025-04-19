import React, { useState, useContext } from "react";
import { Drawer, Button, Menu, Grid, Popover } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { UserContext } from "../../context/UserContext";
import { logoutUser } from "./logoutUser";
import Blank from "../../assets/blank.png"
import "./Navbar.css";

const { useBreakpoint } = Grid;

const Navbar = () => {
  const screens = useBreakpoint();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  const getInitials = () => {
    if (loggedInUser) {
      const { firstName, lastName } = loggedInUser;
      if (firstName && lastName) {
        const first = firstName.charAt(0).toUpperCase();
        const last = lastName.charAt(0).toUpperCase();
        return `${first}${last}`;
      }
    }
    return "PD";
  };

  const handleLogout = () => {
    logoutUser(setLoggedInUser, navigate);
    setPopoverVisible(false);
  };

  const handleMenuClick = (path) => {
    navigate(path);
    setDrawerVisible(false); 
  };
  

  const popoverContent = (
    <div className="navbar-popover-content">
      <Button type="text" block onClick={() => navigate("/profile")}>
        Profile
      </Button>
      <Button type="text" block danger onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );

  const menuItems = [
    { key: "home", label: <div onClick={() => handleMenuClick("/")}>Home</div> },
    { key: "todo", label: <div onClick={() => handleMenuClick("/todo")}>Todo</div> },
    { key: "social", label: <div onClick={() => handleMenuClick("/social")}>Social</div> },
    ...(!loggedInUser
      ? [
          { key: "signin", label: <div onClick={() => handleMenuClick("/signin")}>Sign In</div> },
          { key: "signup", label: <div onClick={() => handleMenuClick("/signup")}>Sign Up</div> },
        ]
      : []),
  ];
  

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>

      {screens.md ? (
        <Menu mode="horizontal" className="navbar-menu" items={menuItems} />
      ) : (
        <>
          <Button icon={<MenuOutlined />} onClick={() => setDrawerVisible(true)} />
          <Drawer
            title="Menu"
            placement="right"
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
          >
            <Menu mode="vertical" items={menuItems} />
          </Drawer>
        </>
      )}

<Popover
  content={loggedInUser ? popoverContent : null}
  trigger={loggedInUser ? "click" : undefined}
  open={loggedInUser && popoverVisible}
  onOpenChange={(visible) => setPopoverVisible(visible)}
  placement="bottomRight"
>
  <div className="navbar-round">
    {loggedInUser ? (
      <span>{getInitials()}</span>
    ) : (
      <img src={Blank} alt="Guest" className="navbar-blank-img" />
    )}
  </div>
</Popover>
    </div>
  );
};

export default Navbar;
