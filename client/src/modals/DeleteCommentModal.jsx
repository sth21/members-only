import Closeable from "./Closeable";
import ModalForm from "./ModalForm";

export default function DeleteCommentModal() {
  return (
    <Closeable>
      <h2>Delete Comment</h2>
      <ModalForm>
        <div>
          <label htmlFor="removeCommentPassword">
            Removal Password (The Odin Project)
          </label>
          <input
            type="text"
            name="removeCommentPassword"
            id="removeCommentPassword"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </ModalForm>
    </Closeable>
  );
}
