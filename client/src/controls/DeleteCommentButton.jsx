import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function DeleteCommentButton({ commentId }) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`/comment/delete/${commentId}`)}>
      Delete Comment
    </button>
  );
}

DeleteCommentButton.propTypes = {
  commentId: PropTypes.string,
};
