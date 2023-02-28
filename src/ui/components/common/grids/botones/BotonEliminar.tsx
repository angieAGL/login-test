import { FaTrashAlt } from "react-icons/fa";
import "../../../../css/botonEliminar.css";
import { BotonBorrar } from "../Interfaces/BotonesInterface";
import PopUpConfirmacion from "../../modal/PopUpConfirmacion";

export const BotonEliminar = ({
  href,
  onClick,
  mostrarPopUp,
  mensaje,
  setMostrarPopUp,
  funcion,
  id,
}: BotonBorrar) => {
  return (
    <>
      <a className="eliminar" href={href} onClick={onClick}>
        <FaTrashAlt />
      </a>
      {PopUpConfirmacion(mostrarPopUp, mensaje, setMostrarPopUp, funcion, id)}
    </>
  );
};
