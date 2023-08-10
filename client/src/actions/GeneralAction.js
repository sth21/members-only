export default async function GeneralAction(request, fields, route) {
  const data = await request.formData();

  const submission = {};

  fields.forEach((field) => (submission[field] = data.get(field)));

  const response = await fetch(route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submission),
  });

  const json = await response.json();

  // need to render error page
  if (json.isFatal) {
    throw new Error();
  }

  toast(json.msg);

  // errors
  if (json.errors.length > 0) {
    return json.errors;
  }

  // all good!
  redirect("/");
}
