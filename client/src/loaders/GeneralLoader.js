export default async function GeneralLoader() {
  const req = await fetch("localhost:3000/comments/");
  const data = await req.json();
  return data;
}
