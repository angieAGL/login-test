import { BotonCrear } from "../Interfaces/BotonesInterface";

export const BotonAgregar = ({ href, onClick }: BotonCrear) => {
  return (
    <>
      <a className="btn me-2 boton-agregar " href={href} onClick={onClick}>
        Agregar
      </a>
    </>
  );
};
