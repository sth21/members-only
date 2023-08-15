import PropTypes from "prop-types";
import RemoveCommentButton from "../controls/RemoveCommentButton";

function Comment({
  isAdmin = false,
  title = "",
  username = "",
  content = "",
  time = "",
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{username}</p>
      <p>{time}</p>
      <p>{content}</p>
      {isAdmin ? <RemoveCommentButton /> : <></>}
    </div>
  );
}

Comment.propTypes = {
  isAdmin: PropTypes.bool,
  title: PropTypes.string,
  username: PropTypes.string,
  content: PropTypes.string,
  time: PropTypes.instanceOf(Date),
};

export default Comment;
