import PropTypes from "prop-types";
import ModalForm from "./ModalForm";
import { useState } from "react";
import Closeable from "./Closeable";

function AdminModal() {
  const [secret, setSecret] = useState("");

  return (
    <Closeable>
      <ModalForm action="/auth/admin">
        <div>
          <label for="adminPassword">Admin Password (The Odin Project)</label>
          <input
            type="text"
            id="adminPassword"
            value={secret}
            required
            onChange={(e) => setSecret(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </ModalForm>
    </Closeable>
  );
}

export default AdminModal;
