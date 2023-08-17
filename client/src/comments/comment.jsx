import PropTypes from "prop-types";
import DeleteCommentButton from "../controls/DeleteCommentButton";
import { CommentHeader, CommentWrapper } from "../styled-components/feed";
import moment from "moment";

function Comment({
  isAdmin = false,
  title = "",
  username = "",
  content = "",
  time = "",
  commentId = "",
}) {
  return (
    <CommentWrapper>
      <CommentHeader>{title}</CommentHeader>
      <p>by: {username}</p>
      <p>at: {moment(time).format("MMMM Do YYYY, h:mm:ss a")}</p>
      <p>{content}</p>
      {isAdmin ? <DeleteCommentButton commentId={commentId} /> : <></>}
    </CommentWrapper>
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
