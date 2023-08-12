import PropTypes from "prop-types";
import { useActionData } from "react-router-dom";
import Closeable from "./Closeable";
import ModalForm from "./ModalForm";

function CommentModal() {
  const errors = useActionData();

  return (
    <Closeable>
      <ModalForm action="/comment">
        <div>
          <label htmlFor="commentTitle">Title</label>
          <input type="text" name="commentTitle" id="commentTitle" required />
        </div>
        <div>
          <label htmlFor="commentContent">Title</label>
          <input
            type="text"
            name="commentContent"
            id="commentContent"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </ModalForm>
    </Closeable>
  );
}

export default CommentModal;
