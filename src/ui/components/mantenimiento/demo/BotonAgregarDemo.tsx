import React from "react";
import { useState } from "react";
import { Demo } from "../../../../dominio/entidades/Demo";
import { DemoEvents } from "../../../../presentacion/DemoEvents";
import { BotonAgregar } from "../../common/grids/botones/BotonAgregar";
import PopUpCreacion from "../../common/modal/PopUpCreacion";
import FormularioDemo from "./FormularioDemo";

export const BotonAgregarDemo = (
  listaGenero: Map<number, string>,
  data: Demo[],
  setData: React.Dispatch<React.SetStateAction<Demo[]>>,
  funcionEliminar: DemoEvents
) => {
  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  const idForm = "FormDemo";
  const onSubmit = (data1: Demo) => {
    const datacopy = [...data];
    datacopy.push(data1);
    setData(datacopy);
    return funcionEliminar.onClickAgregar(data1).then((resp) => resp);
  };
  return (
    <>
      <BotonAgregar
        href="#"
        onClick={() => {
          setMostrarPopUp(true);
        }}
      ></BotonAgregar>
      {PopUpCreacion(
        mostrarPopUp,
        setMostrarPopUp,
        FormularioDemo(listaGenero, idForm, onSubmit),
        idForm
      )}
    </>
  );
};
