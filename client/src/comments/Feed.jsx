import PropTypes from "prop-types";
import Comment from "./Comment";
import HiddenComment from "./HiddenComment";

function Feed({ isMember, comments }) {
  if (isMember)
    return (
      <>
        {comments.map((comment) => (
          <Comment
            title={comment.title}
            content={comment.content}
            time={comment.time}
            username={comment.username}
          />
        ))}
      </>
    );
  else
    return (
      <>
        {comments.map((comment) => (
          <HiddenComment title={comment.title} />
        ))}
      </>
    );
}

Feed.propTypes = {
  isMember: PropTypes.bool,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      time: PropTypes.instanceOf(Date),
    })
  ),
};

export default Feed;
