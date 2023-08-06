import PropTypes from "prop-types";

function CommentButton({ setModal }) {
  return <button onClick={() => setModal("Comment")}>Create Comment</button>;
}

CommentButton.propTypes = {
  setModal: PropTypes.func,
};

export default CommentButton;
