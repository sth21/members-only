import { useState } from "react";
import Navbar from "../navigation/Navbar";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Feed from "../comments/Feed";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function Layout() {
  const { user, comments } = useLoaderData();
  const { username, isUser, isMember, isAdmin } = user;

  console.log(user);

  return (
    <>
      <ToastContainer autoClose={5000} />
      <Outlet context={{ username, isUser, isAdmin, isMember }} />
      <Navbar isUser={isUser} isMember={isMember} isAdmin={isAdmin} />
      <Feed comments={comments} isMember={isMember} isAdmin={isAdmin} />
    </>
  );
}
