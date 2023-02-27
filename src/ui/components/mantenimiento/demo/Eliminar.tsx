import React from "react";
import { BotonEliminar } from "../../common/grids/botones/BotonEliminar";
import { useState } from "react";
import PopUpConfirmacion from "../../common/modal/PopUpConfirmacion";

export const Eliminar = () => {
  const [mostrarPopUp, setMostrarPopUp] = useState(false);

  return (
    <div>
      <BotonEliminar
        href="#"
        onClick={() => {
          setMostrarPopUp(true);
        }}
      ></BotonEliminar>
      {PopUpConfirmacion(mostrarPopUp, "hola", setMostrarPopUp)}
    </div>
  );
};
