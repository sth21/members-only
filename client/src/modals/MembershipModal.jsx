import PropTypes from "prop-types";
import { useState } from "react";
import Closeable from "./Closeable";
import ModalForm from "./ModalForm";
import { Field } from "../styled-components/modal";

function MembershipModal() {
  return (
    <Closeable>
      <ModalForm action="/membership">
        <Field>
          <label htmlFor="membershipPassword">
            Membership Password (The Odin Project)
          </label>
          <input
            type="text"
            name="membershipPassword"
            id="membershipPassword"
            required
          />
        </Field>
        <button type="submit">Submit</button>
      </ModalForm>
    </Closeable>
  );
}

export default MembershipModal;
