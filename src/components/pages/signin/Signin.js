import React, { useContext, useEffect } from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import "react-toastify/dist/ReactToastify.css";


const { Title } = Typography;

const Signin = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser) {
      navigate("/");
    }
  }, [loggedInUser, navigate]);

  const handleLogin = (values) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      toast.error("No user found. Please sign up first.");
      return;
    }

    if (
      values.email === storedUser.email &&
      values.password === storedUser.password
    ) {
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
      setLoggedInUser(storedUser);
      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.error("Invalid credentials.");
    }
  };

  return (
    <div className="auth-container">
      <Card className="auth-card">
        <Title level={3}>Sign In</Title>
        <Form layout="vertical" onFinish={handleLogin}>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default Signin;