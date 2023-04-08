import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Header } from "../layout/Header";
import { Signin } from "../pages/signin";
import { Signup } from "../pages/signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/signin",
    element: <Signin />,
  },
]);
