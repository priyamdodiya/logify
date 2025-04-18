import React, { useEffect, useContext } from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../../context/UserContext";
import "./Profile.css";

const { Title } = Typography;

const EditProfile = () => {
  const [form] = Form.useForm();
  const { setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      form.setFieldsValue(user);
    }
  }, [form]);

  const handleUpdate = (values) => {
    localStorage.setItem("user", JSON.stringify(values));
    setLoggedInUser(values); // 👈 update context
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="auth-container">
      <Card className="auth-card">
        <Title level={3}>Edit Profile</Title>
        <Form form={form} layout="vertical" onFinish={handleUpdate}>
          <Form.Item name="firstName" label="First Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default EditProfile;
