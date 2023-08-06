import PropTypes from "prop-types";

function AdminButton({ setModal }) {
  return <button onClick={() => setModal("Admin")}>Join Club</button>;
}

AdminButton.propTypes = {
  setModal: PropTypes.func,
};

export default AdminButton;
