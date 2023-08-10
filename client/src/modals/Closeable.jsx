import PropTypes from "prop-types";
import ModalContext from "../context/modalContext";
import { Navigate } from "react-router-dom";

function Closeable({ children }) {
  const [closeModal, setCloseModal] = useState(false);
  
  function close(e) {
    if (e.target === e.currentTarget) {
      setCloseModal(true);
    }
  }

  return (
    <ModalContext.Provider value={[ closeModal, setCloseModal ]}>
      <div onClick={close}>{...children}</div>;
    </ModalContext.Provider>
  )
}

Closeable.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Closeable;
