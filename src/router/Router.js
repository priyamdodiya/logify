import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../components/pages/home/Home";
import Signin from "../components/pages/signin/Signin";
import Signup from "../components/pages/signup/Signup";
import Profile from "../components/navbar/profile/Profile";
import TodoList from "../components/pages/todo-list/TodoList";
import PrivateRoute from "./PrivateRoute";
import Social from "../components/pages/social/Social";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/todo"
          element={
            <PrivateRoute>
              <TodoList />
            </PrivateRoute>
          }
        />
        <Route
        path="/social"
        element={
          <PrivateRoute>
            <Social/>
          </PrivateRoute>
        }
        />
        
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;