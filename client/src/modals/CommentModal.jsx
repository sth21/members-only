import PropTypes from "prop-types";
import { Form } from "react-router-dom";
import { useState } from "react";
import Closeable from "./Closeable";

function CommentModal() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Closeable>
      <Form action="/comment/new" method="POST">
        <div>
          <label for="commentTitle">Title</label>
          <input
            type="text"
            id="commentTitle"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label for="commentContent">Title</label>
          <input
            type="text"
            id="commentTitle"
            value={content}
            required
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Closeable>
  );
}

export default CommentModal;
