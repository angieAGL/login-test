import React from "react";
import { useState } from "react";
import { BotonAgregar } from "../../common/grids/botones/BotonAgregar";
import AgregarDemo from "./AgregarDemo";

export const BotonAgregarDemo = (listaGenero: Map<number, string>) => {
  const [mostrarPopUp, setMostrarPopUp] = useState(false);

  return (
    <BotonAgregar
      href="#"
      onClick={() => {
        setMostrarPopUp(true);
      }}
      mostrarPopUp={mostrarPopUp}
      mensaje={<AgregarDemo lista={listaGenero} />}
      setMostrarPopUp={setMostrarPopUp}
    ></BotonAgregar>
  );
};
