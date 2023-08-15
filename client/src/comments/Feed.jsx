import PropTypes from "prop-types";
import Comment from "./Comment";
import HiddenComment from "./HiddenComment";

function Feed({ isMember, isAdmin, comments }) {
  if (comments.length === 0)
    return (
      <>
        <p>Lucky you! Be the first one to comment!</p>
      </>
    );

  if (isMember)
    return (
      <>
        {comments.map((comment) => (
          <Comment
            key={comment._id}
            isAdmin={isAdmin}
            title={comment.title}
            content={comment.content}
            time={comment.time}
            username={comment.username}
            commentId={comment._id}
          />
        ))}
      </>
    );
  else
    return (
      <>
        {comments.map((comment) => (
          <HiddenComment key={comment._id} title={comment.title} />
        ))}
      </>
    );
}

Feed.propTypes = {
  isMember: PropTypes.bool,
  isAdmin: PropTypes.bool,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      time: PropTypes.string,
      _id: PropTypes.string,
    })
  ),
};

export default Feed;
