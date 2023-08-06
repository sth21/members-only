import PropTypes from "prop-types";

function LoginButton({ setModal }) {
  return <button onClick={() => setModal("Login")}>Log In</button>;
}

LoginButton.propTypes = {
  setModal: PropTypes.func,
};

export default LoginButton;
