import PropTypes from "prop-types";

function AccountButton({ setModal }) {
  return <button onClick={() => setModal("Account")}>View Account</button>;
}

AccountButton.propTypes = {
  setModal: PropTypes.func,
};
