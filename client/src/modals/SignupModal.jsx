import PropTypes from "prop-types";
import ModalForm from "./ModalForm";
import { useState } from "react";
import Closeable from "./Closeable";
import { useActionData } from "react-router-dom";
import { Field } from "../styled-components/modal";

export default function SignupModal() {
  const errors = useActionData();

  return (
    <Closeable>
      <ModalForm action="/signup">
        <Field>
          <label htmlFor="username">Username</label>
          <input name="username" type="text" id="username" required />
        </Field>
        <Field>
          <label htmlFor="password">Password</label>
          <input name="password" type="text" id="password" required />
        </Field>
        <Field>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            type="text"
            id="confirmPassword"
            required
          />
        </Field>
        <button type="submit">Submit</button>
      </ModalForm>
    </Closeable>
  );
}
