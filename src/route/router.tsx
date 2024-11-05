import { createBrowserRouter } from "react-router-dom";
import Homescreen from "../page/Homescreen";
import RegisterScreen from "../page/RegisterScreen";
import LoginScreen from "../page/LoginScreen";
import Signup from "../page/signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homescreen />,
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },
  {
    path: "login",
    element: <LoginScreen />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);
