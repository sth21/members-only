import Closeable from "./Closeable";
import ModalForm from "./ModalForm";
import { Field } from "../styled-components/modal";

export default function DeleteCommentModal() {
  return (
    <Closeable>
      <h2>Delete Comment</h2>
      <ModalForm>
        <Field>
          <label htmlFor="removeCommentPassword">
            Removal Password (The Odin Project)
          </label>
          <input
            type="text"
            name="removeCommentPassword"
            id="removeCommentPassword"
            required
          />
        </Field>
        <button type="submit">Submit</button>
      </ModalForm>
    </Closeable>
  );
}
