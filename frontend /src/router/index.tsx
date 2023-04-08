import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { ROUTES } from "../constants/endpoints";
import { Layout } from "../layout";
import { NotFoundPage } from "../pages/notfound";
import { Signin } from "../pages/signin";
import { Signup } from "../pages/signup";

const allRoutes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: (
      <Layout>
        <Signin />
      </Layout>
    ),
  },
  {
    path: ROUTES.SIGNIN,
    element: <Signin />,
  },
  {
    path: ROUTES.SIGNOUT,
    element: <Signup />,
  },
  {
    path: "/*",
    element: <NotFoundPage />, //404 is handled in inbox component
  },
];

export default function Router() {
  const route = useRoutes(allRoutes);
  return route;
}
