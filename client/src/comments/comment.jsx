import PropTypes from "prop-types";
import DeleteCommentButton from "../controls/DeleteCommentButton";

function Comment({
  isAdmin = false,
  title = "",
  username = "",
  content = "",
  time = "",
  commentId = "",
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{username}</p>
      <p>{time}</p>
      <p>{content}</p>
      {isAdmin ? <DeleteCommentButton commentId={commentId} /> : <></>}
    </div>
  );
}

Comment.propTypes = {
  isAdmin: PropTypes.bool,
  title: PropTypes.string,
  username: PropTypes.string,
  content: PropTypes.string,
  time: PropTypes.string,
  commentId: PropTypes.string,
};

export default Comment;
