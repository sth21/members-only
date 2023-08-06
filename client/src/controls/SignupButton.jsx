import PropTypes from "prop-types";

function SignupButton({ setModal }) {
  return <button onClick={() => setModal("Signup")}>Sign Up</button>;
}

SignupButton.propTypes = {
  setModal: PropTypes.func,
};

export default SignupButton;
