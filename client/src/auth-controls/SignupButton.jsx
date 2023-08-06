import PropTypes from "prop-types";

function SignupButton({ setShowModal }) {
    return <button onClick={() => setShowModal(true)}>Sign Up</button>
}

SignupButton.propTypes = {
    setShowModal: PropTypes.func
}


export default SignupButton;