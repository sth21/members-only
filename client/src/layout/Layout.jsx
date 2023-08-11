import { useState } from "react";
import Navbar from "../navigation/Navbar";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Feed from "../comments/Feed";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [user, setUser] = useState(null);
  const comments = useLoaderData();

  console.log(typeof comments);

  return (
    <>
      <ToastContainer />
      <Outlet />
      <Navbar
        isUser={user !== null}
        isMember={user !== null && user.memberStatus}
        isAdmin={user !== null && user.adminStatus}
      />
      <Feed comments={comments} />
    </>
  );
}
