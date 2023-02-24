import { FaTrashAlt } from "react-icons/fa";
import "../../../../css/botonEliminar.css";
import { BotonAccion } from "../Interfaces/BotonesInterface";

export const BotonEliminar = ({ onClick }: BotonAccion) => {
  return (
    <span className="eliminar" onClick={onClick}>
      <FaTrashAlt />
    </span>
  );
};
