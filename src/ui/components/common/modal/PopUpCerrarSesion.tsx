import React from "react";
import { deleteCookie } from "../../utils/FuncionCookie";
import Boton from "../grids/botones/Boton";
import PopUpBase from "./PopUpBase";
const PopUpCerrarSesion = (
  mostrar: boolean,
  mensaje: string,
  setMostrarPopUp: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const boton: Array<JSX.Element> = [
    <Boton
      key={1}
      class_name={"btn-cerrar"}
      text={"No"}
      type={"button"}
      onClick={() => setMostrarPopUp(false)}
    />,
    <Boton
      key={4}
      text={"Si"}
      type={"button"}
      onClick={() => {
        deleteCookie("session");
        window.location.reload();
      }}
    />,
  ];
  return (
    <>
      <PopUpBase show={mostrar} mensaje={mensaje} botones={boton}></PopUpBase>
    </>
  );
};

export default PopUpCerrarSesion;
