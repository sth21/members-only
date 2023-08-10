import PropTypes from "prop-types";
import { useState } from "react";
import Closeable from "./Closeable";
import ModalForm from "./ModalForm";

function LoginModal() {
  return (
    <Closeable>
      <ModalForm action="login">
        <div>
          <label for="username">username</label>
          <input
            type="text"
            id="username"
            required
          />
        </div>
        <div>
          <label for="password">username</label>
          <input
            type="text"
            id="password"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </ModalForm>
    </Closeable>
  );
}

export default LoginModal;
