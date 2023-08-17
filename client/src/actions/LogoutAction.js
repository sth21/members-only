import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export default async function LogoutAction() {
  try {
    const res = await fetch("http://localhost:3000/auth/logout", {
      credentials: "include",
      method: "POST",
    });
    const data = await res.json();
    toast(data.msg);
    return redirect("/");
  } catch (err) {
    toast(err.message);
    return err;
  }
}
