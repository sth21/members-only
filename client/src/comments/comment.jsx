import PropTypes from "prop-types";

function Comment({ title, username, content, time }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{username}</p>
      <p>{time}</p>
      <p>{content}</p>
    </div>
  );
}

Comment.propTypes = {
  title: PropTypes.string,
  username: PropTypes.string,
  content: PropTypes.string,
  time: PropTypes.instanceOf(Date),
};

export default Comment;
