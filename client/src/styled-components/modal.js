import { styled } from "styled-components";
import { Form } from "react-router-dom";

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: black;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled(Form)`
  background-color: white;
  padding: 2em;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  min-width: 20vw;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Input = styled.input``;

export { ModalBackground, Modal, Field };
