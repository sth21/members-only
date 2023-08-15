import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AccountModal from "./modals/AccountModal";
import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignupModal";
import MembershipModal from "./modals/MembershipModal";
import AdminModal from "./modals/AdminModal";
import CommentModal from "./modals/CommentModal";
import DeleteCommentModal from "./modals/DeleteCommentModal";
import Layout from "./layout/Layout";
import CommentLoader from "./loaders/CommentLoader";
import UserLoader from "./loaders/UserLoader";
import ErrorPage from "./ErrorPage";
import GeneralAction from "./actions/GeneralAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: async () => {
      const [comments, user] = await Promise.all([
        CommentLoader(),
        UserLoader(),
      ]);
      return { comments, user };
    },
    children: [
      {
        path: "/account",
        element: <AccountModal />,
      },
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
      {
        path: "/comment/delete/:commentId",
        element: <DeleteCommentModal />,
        action: async ({ request, params }) => {
          const url = "http://localhost:3000/comments/delete/".concat(
            params.commentId
          );
          const res = await GeneralAction(
            request,
            ["removeCommentPassword"],
            url
          );
          return res;
        },
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
