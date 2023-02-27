import { FaTrashAlt } from "react-icons/fa";
import "../../../../css/botonEliminar.css";
import { BotonAccion } from "../Interfaces/BotonesInterface";

export const BotonEliminar = ({ href, onClick }: BotonAccion) => {
  return (
    <a className="eliminar" href={href} onClick={onClick}>
      <FaTrashAlt />
    </a>
  );
};
