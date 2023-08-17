import { toast } from "react-toastify";
import { redirect, useSearchParams } from "react-router-dom";

export default async function GeneralAction(request, fields, route) {
  const data = await request.formData();

  const submission = {};

  fields.forEach((field) => {
    submission[field] = data.get(field);
  });

  let json;

  try {
    const response = await fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(submission),
    });

    json = await response.json();
  } catch (err) {
    return err;
  }

  // need to render error page
  if (!json || json.isFatal) {
    throw new Error();
  }

  // errors
  if (json.errors.length > 0) {
    toast.error(json.msg);
    return json.errors;
  }

  // all good!
  toast.success(json.msg);
  return redirect("/");
}
