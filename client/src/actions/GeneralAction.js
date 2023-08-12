import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

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
      body: JSON.stringify(submission),
    });

    json = await response.json();
  } catch (err) {
    console.log(err);
  }

  console.log(json);

  // need to render error page
  if (!json || json.isFatal) {
    throw new Error();
  }

  // errors
  if (json.errors.length > 0) {
    toast.error(json.msg, { position: toast.POSITION.TOP_RIGHT });
    return json.errors;
  }

  // all good!
  toast.success(json.msg, { position: toast.POSITION.TOP_RIGHT });
  return redirect("/");
}
