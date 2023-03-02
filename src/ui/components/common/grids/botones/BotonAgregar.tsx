import "../../../../css/botonEliminar.css";
import { BotonCrear } from "../Interfaces/BotonesInterface";
import PopUpCreacion from "../../modal/PopUpCreacion";
import React from "react";

export const BotonAgregar = ({
  href,
  onClick,
  mostrarPopUp,
  mensaje,
  setMostrarPopUp,
}: BotonCrear) => {
  return (
    <>
      <a className="btn" href={href} onClick={onClick}>
        Agregar
      </a>
      {PopUpCreacion(mostrarPopUp, setMostrarPopUp, mensaje)}
    </>
  );
};
