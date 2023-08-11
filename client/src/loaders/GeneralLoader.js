export default async function GeneralLoader() {
  const req = await fetch("http://localhost:3000/comments", {
    mode: "cors",
  });
  const data = await req.json();

  return data.comments;
}
