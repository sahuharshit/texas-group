import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { ROUTES } from "../constants/endpoints";
import { Layout } from "../layout";
import { Attendees } from "../pages/attendees";
import { EventPage } from "../pages/events";
import { EventForm } from "../pages/events/createEvent";
import { NotFoundPage } from "../pages/notfound";
import { Contact } from "../pages/public/contact";
import { EventDetail } from "../pages/public/eventdetails";
import { Homepage } from "../pages/public/homepage";
import { HomepageFooter } from "../pages/public/homepage/footer";
import { HomepageHeader } from "../pages/public/homepage/Header";
import { SignIn } from "../pages/signin";
import { Signup } from "../pages/signup";

const allRoutes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <Homepage />,
  },
  {
    path: "/events/details/:id",
    element: (
      <>
        <HomepageHeader />
        <EventDetail />
        <HomepageFooter />
      </>
    ),
  },
  {
    path: ROUTES.EVENT,
    element: (
      <Layout>
        <EventForm />
      </Layout>
    ),
  },
  {
    path: ROUTES.ATTENDEES,
    element: (
      <Layout>
        <Attendees />
      </Layout>
    ),
  },
  {
    path: ROUTES.SIGNIN,
    element: <SignIn />,
  },
  {
    path: "/contact",
    element: (
      <>
        <HomepageHeader></HomepageHeader>
        <Contact />
        <HomepageFooter />
      </>
    ),
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
