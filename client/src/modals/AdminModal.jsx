import PropTypes from "prop-types";
import { Form } from "react-router-dom";
import { useState } from "react";
import Closeable from "./Closeable";

function AdminModal() {
  const [secret, setSecret] = useState("");

  return (
    <Closeable>
      <Form action="/auth/admin" method="POST">
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
      </Form>
    </Closeable>
  );
}

export default AdminModal;
