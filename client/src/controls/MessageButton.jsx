import PropTypes from "prop-types";

function MessageButton({ setModal }) {
  return <button onClick={() => setModal("Message")}>Create Message</button>;
}

MessageButton.propTypes = {
  setModal: PropTypes.func,
};

export default MessageButton;
