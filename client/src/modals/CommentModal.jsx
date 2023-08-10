import PropTypes from "prop-types";
import { useState } from "react";
import Closeable from "./Closeable";
import ModalForm from "./ModalForm";

function CommentModal() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Closeable>
      <ModalForm action="/comment/new">
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
      </ModalForm>
    </Closeable>
  );
}

export default CommentModal;
