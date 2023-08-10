import PropTypes from "prop-types";
import ModalForm from "./ModalForm";
import { useState } from "react";
import Closeable from "./Closeable";
import ModalForm from "./ModalForm";

function SignupModal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Closeable>
      <ModalForm action="/auth/login">
        <div>
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="text"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label for="username">Confirm Password</label>
          <input
            type="text"
            id="confirmPassword"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </ModalForm>
    </Closeable>
  );
}

export default SignupModal;
