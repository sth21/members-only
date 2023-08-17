import PropTypes from "prop-types";
import { CommentHeader, CommentWrapper } from "../styled-components/feed";

function HiddenComment({ title }) {
  return (
    <CommentWrapper>
      <CommentHeader>{title}</CommentHeader>
      <p>by Anonymous</p>
      <p>Sign in to view posts</p>
    </CommentWrapper>
  );
}

HiddenComment.propTypes = {
  title: PropTypes.string,
};

export default HiddenComment;
