import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AccountModal from "./modals/AccountModal";
import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignupModal";
import MembershipModal from "./modals/MembershipModal";
import AdminModal from "./modals/AdminModal";
import CommentModal from "./modals/CommentModal";
import Layout from "./layout/Layout";
import CommentLoader from "./loaders/GeneralLoader";
import ErrorPage from "./ErrorPage";
import GeneralAction from "./actions/GeneralAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: CommentLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LoginModal />,
        action: async ({ request }) =>
          await GeneralAction(
            request,
            ["username", "password"],
            "http://localhost:3000/auth/login"
          ),
      },
      {
        path: "/signup",
        element: <SignupModal />,
        action: async ({ request }) =>
          await GeneralAction(
            request,
            ["username", "password", "confirmPassword"],
            "http://localhost:3000/auth/signup"
          ),
      },
      {
        path: "/membership",
        element: <MembershipModal />,
        action: async ({ request }) =>
          await GeneralAction(
            request,
            ["membershipPassword"],
            "http://localhost:3000/permissions/membership"
          ),
      },
      {
        path: "/admin",
        element: <AdminModal />,
        action: async ({ request }) =>
          await GeneralAction(
            request,
            ["adminPassword"],
            "http://localhost:3000/permissions/admin"
          ),
      },
      {
        path: "/comment",
        element: <CommentModal />,
        action: async ({ request }) =>
          await GeneralAction(
            request,
            ["commentTitle", "commentContent"],
            "http://localhost:3000/comments/add"
          ),
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
