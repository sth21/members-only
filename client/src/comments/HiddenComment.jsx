import PropTypes from "prop-types";

function HiddenComment({ title }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>by Anonymous</p>
      <p>Sign in to view posts</p>
    </div>
  );
}

HiddenComment.propTypes = {
  title: PropTypes.string,
};

export default HiddenComment;
