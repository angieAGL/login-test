import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../../../css/botonEditar.css";
import { BotonAccion } from "../Interfaces/BotonesInterface";

export const BotonEditar = ({ to, onClick, state }: BotonAccion) => {
  return (
    <Link to={to} className="editar" state={state} onClick={onClick}>
      <FaPen />
    </Link>
  );
};
