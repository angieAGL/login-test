import { FaPen } from "react-icons/fa";
import "../../../../css/botonEditar.css";
import { BotonAccion } from "../Interfaces/BotonesInterface";

export const BotonEditar = ({ onClick }: BotonAccion) => {
  return (
    <span className="editar" onClick={onClick}>
      <FaPen />
    </span>
  );
};
