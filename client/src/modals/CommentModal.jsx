import PropTypes from "prop-types";
import { useActionData } from "react-router-dom";
import Closeable from "./Closeable";
import ModalForm from "./ModalForm";
import { Field } from "../styled-components/modal";

function CommentModal() {
  const errors = useActionData();

  return (
    <Closeable>
      <ModalForm action="/comment">
        <Field>
          <label htmlFor="commentTitle">Title</label>
          <input type="text" name="commentTitle" id="commentTitle" required />
        </Field>
        <Field>
          <label htmlFor="commentContent">Content</label>
          <textarea
            type="text"
            name="commentContent"
            id="commentContent"
            required
          />
        </Field>
        <button type="submit">Submit</button>
      </ModalForm>
    </Closeable>
  );
}

export default CommentModal;
