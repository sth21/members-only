import PropTypes from "prop-types";
import { Modal } from "../styled-components/modal";

function ModalForm({ action, children }) {
  return (
    <Modal action={action} method="post">
      {...children}
    </Modal>
  );
}

ModalForm.propTypes = {
  action: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default ModalForm;
