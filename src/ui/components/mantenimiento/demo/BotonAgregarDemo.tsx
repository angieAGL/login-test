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
  const idFormulario = "FormDemo";
  const initialData = {
    id: 0,
    nombre: "",
    apellido: "",
    email: "",
    id_genero: 0,
    genero: "",
    numero: 0,
    fecha: "",
    activo: true,
  };

  const onsubmit = async (nuevoDemo: Demo) => {
    funcionEliminar.onClickAgregar(nuevoDemo).then((resp) => {
      if (resp) {
        setMostrarPopUp(false);
        const datacopy = [...data];
        datacopy.push(nuevoDemo);
        setData(datacopy);
      } else {
        setMostrarPopUp(true);
      }
    });
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
        FormularioDemo(listaGenero, idFormulario, onsubmit, initialData),
        idFormulario
      )}
    </>
  );
};
