import Modal from "react-bootstrap/Modal";
import Boton from "../grids/botones/Boton";
const PopUp = (
  mostrar: boolean,
  setMostrarPopUp: React.Dispatch<React.SetStateAction<boolean>>,
  mensaje: string
) => {
  let valor = mostrar;

  return (
    <>
      <Modal show={valor} centered>
        <Modal.Body>{mensaje}</Modal.Body>
        <Modal.Footer>
          <Boton
            text={"Cerrar"}
            type={"button"}
            onClick={() => setMostrarPopUp(false)}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopUp;
