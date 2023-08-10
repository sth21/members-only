import PropTypes from "prop-types";
import { Form } from "react-router-dom";

function ModalForm({ action, children }) {
  return (
    <Form action={action} method="post">
      {...children}
    </Form>
  );
}

ModalForm.propTypes = {
  action: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default ModalForm;
