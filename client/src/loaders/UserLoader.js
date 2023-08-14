export default async function UserLoader() {
  const req = await fetch("http://localhost:3000/user", {
    mode: "cors",
    credentials: "include",
  });
  const data = await req.json();

  console.log(data);

  return data;
}
