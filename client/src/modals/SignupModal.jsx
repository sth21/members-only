import PropTypes from "prop-types";
import ModalForm from "./ModalForm";
import { useState } from "react";
import Closeable from "./Closeable";

export default function SignupModal() {
  return (
    <Closeable>
      <ModalForm action="/signup">
        <div>
          <label htmlFor="username">Username</label>
          <input name="username" type="text" id="username" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input name="password" type="text" id="password" required />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            type="text"
            id="confirmPassword"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </ModalForm>
    </Closeable>
  );
}
