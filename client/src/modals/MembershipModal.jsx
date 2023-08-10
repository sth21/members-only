import PropTypes from "prop-types";
import { useState } from "react";
import Closeable from "./Closeable";

function MembershipModal() {
  const [secret, setSecret] = useState("");

  return (
    <Closeable>
      <ModalForm action="/auth/membership">
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
      </ModalForm>
    </Closeable>
  );
}

export default MembershipModal;
