import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ModalBackground } from "../styled-components/modal";

function Closeable({ children }) {
  const navigate = useNavigate();

  function close(e) {
    if (e.target === e.currentTarget) {
      navigate("/");
    }
  }

  return <ModalBackground onClick={close}>{children}</ModalBackground>;
}

Closeable.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Closeable;
