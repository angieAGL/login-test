import Modal from "react-bootstrap/Modal";
import { popUpBaseInterface } from "../../Interfaces/PopUpInterface";

const PopUpBase = ({ show, titulo, mensaje, botones }: popUpBaseInterface) => {
  return (
    <>
      <Modal show={show} centered scrollable>
        {titulo ? (
          <Modal.Header>
            <Modal.Title>{titulo}</Modal.Title>
          </Modal.Header>
        ) : null}

        <Modal.Body>{mensaje}</Modal.Body>
        <Modal.Footer>{botones}</Modal.Footer>
      </Modal>
    </>
  );
};

export default PopUpBase;
