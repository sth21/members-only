export default async function CommentLoader() {
  const req = await fetch("http://localhost:3000/comments", {
    mode: "cors",
  });
  const data = await req.json();

  return data.comments;
}
