import { useNavigate } from "react-router-dom";

export default function MembershipButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/membership")}>Become a member</button>
  );
}
