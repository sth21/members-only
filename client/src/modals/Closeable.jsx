import PropTypes from "prop-types";

function Closeable({ setModal, children }) {
  function close(e) {
    if (e.target === e.currentTarget) {
      setModal("");
    }
  }

  return <div onClick={close}>{...children}</div>;
}

Closeable.propTypes = {
  setModal: PropTypes.func,
};

export default Closeable;