import "../../../../css/botonEliminar.css";
import { BotonCrear } from "../Interfaces/BotonesInterface";

export const BotonAgregar = ({ href, onClick }: BotonCrear) => {
  return (
    <>
      <a className="btn" href={href} onClick={onClick}>
        Agregar
      </a>
    </>
  );
};
