import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();

  return <button onClick={() => navigate("/login")}>Log In</button>;
}
