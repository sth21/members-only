import { styled } from "styled-components";

const FeedWrapper = styled.div`
  padding: 0em 2em;
  display: flex;
  flex-direction: column;
  gap: 5em;
`;

const CommentWrapper = styled.div`
  max-width: 30vw;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const CommentHeader = styled.h2`
  font-size: 1.25rem;
  color: blue;
`;

export { FeedWrapper, CommentWrapper, CommentHeader };
