/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import { BotonEditar } from "../../common/grids/botones/BotonEditar";
import CellActivo from "../../common/grids/CellActivo";
import BuscadorPorCabecera from "../../common/grids/buscadores/BuscadorPorCabecera";
import BuscadorPorSeleccion from "../../common/grids/buscadores/BuscadorPorSeleccion";
import BuscadorPorFecha from "../../common/grids/buscadores/BuscadorPorFecha";
import BotonReset from "../../common/grids/botones/BotonReset";
import FormatoFecha from "../../common/FormatoFecha";
import { Column } from "react-table";
import { Demo } from "../../../../dominio/entidades/Demo";
import { Eliminar } from "./Eliminar";

const ColumnaGrid = (
  listaGenero: Map<number, string>,
  listaActivo: Map<boolean, string>,
  data: Demo[],
  setData: React.Dispatch<React.SetStateAction<Demo[]>>
) => {
  // const eliminar = (id: number) => {
  //   setMostrarPopUp(true);
  //   const datacopy = [...data];
  //   datacopy[id].activo = false;
  //   setData(datacopy);
  // };

  const columns: Array<Column> = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        Filter: BuscadorPorCabecera,
      },
      {
        Header: "Nombre",
        accessor: "nombre",
        Filter: BuscadorPorCabecera,
      },
      {
        Header: "Apellido",
        accessor: "apellido",
        Filter: BuscadorPorCabecera,
      },
      {
        Header: "Email",
        accessor: "email",
        Filter: BuscadorPorCabecera,
      },
      {
        Header: "Genero",
        accessor: "id_genero",
        lista: listaGenero,
        Filter: BuscadorPorSeleccion,
        Cell: ({ row }) => row.values.genero,
      },
      {
        Header: "Genero",
        accessor: "genero",
      },
      {
        Header: "Numeros",
        accessor: "numero",
        Filter: BuscadorPorCabecera,
      },
      {
        Header: "Fecha",
        accessor: "fecha",
        Filter: BuscadorPorFecha,
        Cell: ({ row }) => FormatoFecha(row.values.fecha),
      },
      {
        Header: "Activo",
        accessor: "activo",
        lista: listaActivo,
        Filter: BuscadorPorSeleccion,
        Cell: ({ row }) => CellActivo(row.values.activo),
      },
      {
        Header: "Accion",
        accessor: "accion",
        Filter: BotonReset,
        Cell: ({ row }) => (
          <div>
            <BotonEditar
              href="#"
              onClick={() => alert("mensaje")}
            ></BotonEditar>

            {Eliminar()}
          </div>
        ),
      },
    ],
    [data, setData]
  );
  return columns;
};

export default ColumnaGrid;
