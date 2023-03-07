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
        console.log(nuevoDemo);
        const datacopy = [...data];
        datacopy[id].nombre = nuevoDemo.nombre;
        datacopy[id].apellido = nuevoDemo.apellido;
        datacopy[id].email = nuevoDemo.email;
        datacopy[id].fecha = nuevoDemo.fecha;
        datacopy[id].id_genero = nuevoDemo.id_genero;
        datacopy[id].genero = nuevoDemo.genero;
        datacopy[id].numero = nuevoDemo.numero;
        console.log(datacopy);
        setData(datacopy);

        setMostrarPopUp(false);
      } else {
        setMostrarPopUp(true);
      }
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
