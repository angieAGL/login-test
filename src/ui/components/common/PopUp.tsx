import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const PopUp = (
  mostrar: boolean,
  setMostrarPopUp: React.Dispatch<React.SetStateAction<boolean>>,
  mensaje: string
) => {
  let valor = mostrar;

  return (
    <>
      <Modal show={valor}>
        <Modal.Body>{mensaje}</Modal.Body>
        <Modal.Footer>
          <Button variant="btn" onClick={() => setMostrarPopUp(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopUp;
