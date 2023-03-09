import React from "react";
import { useState } from "react";
import { Demo } from "../../../../dominio/entidades/Demo";
import { DemoEvents } from "../../../../presentacion/DemoEvents";
import { BotonEditar } from "../../common/grids/botones/BotonEditar";
import PopUpFormulario from "../../common/modal/PopUpFormulario";
import FormularioDemo from "./FormularioDemo";

export const BotonEditarDemo = (
  listaGenero: Map<number, string>,
  data: Demo[],
  setData: React.Dispatch<React.SetStateAction<Demo[]>>,
  funcionEliminar: DemoEvents,
  id: number,
  initialData: Record<string, any>
) => {
  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  const idFormulario = "FormDemo";

  const onsubmit = async (nuevoDemo: Demo) => {
    funcionEliminar.onClickEditar(nuevoDemo).then((resp) => {
      if (resp) {
        const datacopy = [...data];
        datacopy.splice(id, 1, nuevoDemo);
        setData(datacopy);
      }
      setMostrarPopUp(!resp);
    });
  };

  return (
    <>
      <BotonEditar
        href="#"
        onClick={() => {
          setMostrarPopUp(true);
        }}
      ></BotonEditar>
      {PopUpFormulario(
        mostrarPopUp,
        setMostrarPopUp,
        FormularioDemo(
          true,
          listaGenero,
          idFormulario,
          onsubmit,
          initialData as Demo
        ),
        idFormulario,
        "Editar Demo"
      )}
    </>
  );
};
