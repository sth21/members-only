import PropTypes from "prop-types";
import ModalContext from "../context/modalContext";
import { useNavigate } from "react-router-dom";

function Closeable({ children }) {
  const navigate = useNavigate();

  function close(e) {
    if (e.target === e.currentTarget) {
      navigate("/");
    }
  }

  return <div onClick={close}>{...children}</div>;
}

Closeable.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Closeable;
