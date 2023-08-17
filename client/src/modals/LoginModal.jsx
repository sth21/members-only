import PropTypes from "prop-types";
import { useActionData } from "react-router-dom";
import { useState } from "react";
import Closeable from "./Closeable";
import ModalForm from "./ModalForm";
import { Field } from "../styled-components/modal";

function LoginModal() {
  const errors = useActionData();

  return (
    <Closeable>
      <ModalForm action="/login">
        <Field>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" required />
        </Field>
        <Field>
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" required />
        </Field>
        <button type="submit">Submit</button>
      </ModalForm>
    </Closeable>
  );
}

export default LoginModal;
