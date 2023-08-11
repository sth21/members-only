import PropTypes from "prop-types";
import ModalForm from "./ModalForm";
import { useState } from "react";
import Closeable from "./Closeable";

export default function SignupModal() {
  return (
    <Closeable>
      <ModalForm action="/signup">
        <div>
          <label for="username">Username</label>
          <input type="text" id="username" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="text" id="password" required />
        </div>
        <div>
          <label for="confirmPassword">Confirm Password</label>
          <input type="text" id="confirmPassword" required />
        </div>
        <button type="submit">Submit</button>
      </ModalForm>
    </Closeable>
  );
}
