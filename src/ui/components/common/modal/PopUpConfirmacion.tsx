import React from "react";
import Boton from "../grids/botones/Boton";
import PopUpBase from "./PopUpBase";
const PopUpConfirmacion = (
  mostrar: boolean,
  mensaje: string,
  setMostrarPopUp: any
) => {
  let boton: Array<object> = [];

  boton.push(
    <Boton
      key={1}
      text={"Cerrar"}
      type={"button"}
      onClick={() => setMostrarPopUp(false)}
    />,
    <Boton
      key={2}
      text={"Guardar"}
      type={"button"}
      onClick={() => {
        setMostrarPopUp(false);
      }}
    />
  );

  return (
    <>
      <PopUpBase show={mostrar} mensaje={mensaje} botones={boton}></PopUpBase>
    </>
  );
};

export default PopUpConfirmacion;
