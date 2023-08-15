import { useNavigate } from "react-router-dom";

export default function RemoveCommentButton({ commentId }) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/comment/delete")}>Delete Comment</button>
  );
}
