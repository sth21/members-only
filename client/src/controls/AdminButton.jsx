import { useNavigate } from "react-router-dom";

export default function AdminButton() {
  const navigate = useNavigate();

  return <button onClick={() => navigate("/admin")}>Become an admin</button>;
}
