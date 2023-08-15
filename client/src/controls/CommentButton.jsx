import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function CommentButton({ setModal }) {
  const navigate = useNavigate();

  return <button onClick={() => navigate("/comment")}>Create Comment</button>;
}

CommentButton.propTypes = {
  setModal: PropTypes.func,
};

export default CommentButton;
