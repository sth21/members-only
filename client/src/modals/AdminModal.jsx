import PropTypes from "prop-types";
import ModalForm from "./ModalForm";
import { useState } from "react";
import Closeable from "./Closeable";
import { toast } from "react-toastify";

function AdminModal() {
  return (
    <Closeable>
      <ModalForm action="/admin">
        <div>
          <label for="adminPassword">Admin Password (The Odin Project)</label>
          <input
            type="text"
            id="adminPassword"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </ModalForm>
    </Closeable>
  );
}

export default AdminModal;
