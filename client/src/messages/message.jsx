import PropTypes from "prop-types";

function Message({ comment, memberStatus }) {
  return (
    <div>
      <h2>{comment.title}</h2>
      <p>{memberStatus ? `by ${comment.username}` : comment.content}</p>
      <p>
        {memberStatus
          ? comment.time
          : "Become a member to see who wrote this comment"}
      </p>
      {memberStatus ? <p>{comment.content}</p> : <></>}
    </div>
  );
}

Message.propTypes = {
  memberStatus: PropTypes.bool,
  comment: PropTypes.shape({
    username: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    time: PropTypes.instanceOf(Date),
  }),
};

export default Message;
