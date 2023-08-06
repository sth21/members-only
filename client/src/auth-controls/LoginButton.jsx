import PropTypes from "prop-types";

function LoginButton({ setShowModal }) {
    return <button onClick={() => setShowModal(true)}>Log In</button>
}

LoginButton.propTypes = {
    setShowModal: PropTypes.func
}

export default LoginButton;