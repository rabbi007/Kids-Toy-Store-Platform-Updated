import { createBrowserRouter } from "react-router";

import MainLayouts from "../Layouts/MainLayouts";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import AllToys from "../Pages/AllToys";
import Details from "../Pages/Details";
import Profile from "../Pages/Profile";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import TermsAndConditions from "../Pages/TermsAndConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import Login from "../Pages/Login";
import ForgetPassword from "../Pages/forgetPassword";
import PrivateRoutes from "./PrivateRoutes";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },

      {
        path: "/store",
        element: <AllToys />,
      },

      {
        path: "/details/:id",
        element: <Details />,
      },

      {
        path: "/about-us",
        element: <AboutUs />,
      },

      {
        path: "/contact-us",
        element: <ContactUs />,
      },

      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },

      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },

      {
        path: "/forget-Password",
        element: <ForgetPassword />,
      },
    ],
  },
]);

export default Router;
