import PropTypes from "prop-types";
import { useState } from "react";
import Closeable from "./Closeable";

function MembershipModal() {
  return (
    <Closeable>
      <ModalForm action="/membership">
        <div>
          <label htmlFor="membershipPassword">
            Membership Password (The Odin Project)
          </label>
          <input
            type="text"
            name="membershipPassword"
            id="membershipPassword"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </ModalForm>
    </Closeable>
  );
}

export default MembershipModal;
