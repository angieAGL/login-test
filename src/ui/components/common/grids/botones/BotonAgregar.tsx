import { Link } from "react-router-dom";
import { BotonCrear } from "../../../Interfaces/BotonesInterface";

export const BotonAgregar = ({ to, onClick, state }: BotonCrear) => {
  return (
    <Link
      to={to}
      className="btn me-2 boton-agregar "
      state={state}
      onClick={onClick}
    >
      Agregar
    </Link>
  );
};
