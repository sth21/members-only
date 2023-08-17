import PropTypes from "prop-types";
import Comment from "./comment";
import HiddenComment from "./HiddenComment";
import { FeedWrapper } from "../styled-components/feed.js";

function Feed({ isMember, isAdmin, comments }) {
  if (comments.length === 0)
    return (
      <FeedWrapper>
        <p>Lucky you! Be the first one to comment!</p>
      </FeedWrapper>
    );

  if (isMember)
    return (
      <FeedWrapper>
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
      </FeedWrapper>
    );
  else
    return (
      <FeedWrapper>
        {comments.map((comment) => (
          <HiddenComment key={comment._id} title={comment.title} />
        ))}
      </FeedWrapper>
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
