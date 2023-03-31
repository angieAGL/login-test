import React from "react";
import PopUpCerrarSesion from "../../modal/PopUpCerrarSesion";
import { ImExit } from "react-icons/im";
import { BotonLogOut } from "../../../Interfaces/BotonesInterface";

const BotonCerrarSesion = ({
  href,
  onClick,
  mostrarPopUp,
  mensaje,
  setMostrarPopUp,
}: BotonLogOut) => {
  return (
    <>
      <a href={href} onClick={onClick}>
        <ImExit color="var(--color-principal-oscuro)" size={"30px"} />
      </a>
      {PopUpCerrarSesion(mostrarPopUp, mensaje, setMostrarPopUp)}
    </>
  );
};

export default BotonCerrarSesion;
