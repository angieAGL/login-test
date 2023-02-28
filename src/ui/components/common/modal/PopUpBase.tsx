import Modal from "react-bootstrap/Modal";
import { popUpBaseInterface } from "./PopUpInterface";

const PopUpBase = ({ show, mensaje, botones }: popUpBaseInterface) => {
  return (
    <>
      <Modal show={show} centered>
        <Modal.Body>{mensaje}</Modal.Body>
        <Modal.Footer>{botones}</Modal.Footer>
      </Modal>
    </>
  );
};

export default PopUpBase;
