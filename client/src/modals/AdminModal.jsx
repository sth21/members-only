import PropTypes from "prop-types";
import ModalForm from "./ModalForm";
import { useState } from "react";
import Closeable from "./Closeable";
import { toast } from "react-toastify";
import { Field } from "../styled-components/modal";

function AdminModal() {
  return (
    <Closeable>
      <ModalForm action="/admin">
        <Field>
          <label htmlFor="adminPassword">
            Admin Password (The Odin Project)
          </label>
          <input name="adminPassword" type="text" id="adminPassword" required />
        </Field>
        <button type="submit">Submit</button>
      </ModalForm>
    </Closeable>
  );
}

export default AdminModal;
