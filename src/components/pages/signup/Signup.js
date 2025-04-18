import React, { useContext, useEffect } from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";

const { Title } = Typography;

const Signup = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    if (loggedInUser) {
      navigate("/");
    }
  }, [loggedInUser, navigate]);

  const handleSubmit = (values) => {
    localStorage.setItem("user", JSON.stringify(values));
    toast.success("Account created!");
    form.resetFields();
    navigate("/signin");
  };

  return (
    <div className="auth-container">
      <Card className="auth-card">
        <Title level={3}>Sign Up</Title>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
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
              Create Account
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default Signup;
