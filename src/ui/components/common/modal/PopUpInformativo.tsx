import React from "react";
import Boton from "../grids/botones/Boton";
import PopUpBase from "./PopUpBase";

const PopUpInformativo = (
  mostrar: boolean,
  setMostrarPopUp: React.Dispatch<React.SetStateAction<boolean>>,
  mensaje: string
) => {
  let boton: Array<JSX.Element> = [];

  boton.push(
    <Boton
      key={1}
      text={"Cerrar"}
      class_name={"btn-cerrar"}
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

export default PopUpInformativo;
