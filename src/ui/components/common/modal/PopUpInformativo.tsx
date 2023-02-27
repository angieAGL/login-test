import React from "react";
import Boton from "../grids/botones/Boton";
import PopUpBase from "./PopUpBase";
const PopUp = (
  mostrar: boolean,
  setMostrarPopUp: React.Dispatch<React.SetStateAction<boolean>>,
  mensaje: string
) => {
  let boton: Array<object> = [];

  boton.push(
    <Boton
      text={"Cerrar"}
      type={"button"}
      onClick={() => setMostrarPopUp(false)}
    />
  );

  return (
    <>
      <PopUpBase show={mostrar} mensaje={mensaje} botones={boton}></PopUpBase>
    </>
  );
};

export default PopUp;
