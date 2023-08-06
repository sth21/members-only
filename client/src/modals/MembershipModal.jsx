import PropTypes from "prop-types";
import { Form } from "react-router-dom";
import { useState } from "react";
import Closeable from "./Closeable";

function MembershipModal() {
  const [secret, setSecret] = useState("");

  return (
    <Closeable>
      <Form action="/auth/membership" method="POST">
        <div>
          <label for="membershipPassword">
            Membership Password (The Odin Project)
          </label>
          <input
            type="text"
            id="membershipPassword"
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

export default MembershipModal;