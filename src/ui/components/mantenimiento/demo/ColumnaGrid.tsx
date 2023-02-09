/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import { BotonEditar } from "../../common/grids/botones/BotonEditar";
import { BotonEliminar } from "../../common/grids/botones/BotonEliminar";
import CellActivo from "../../common/grids/CellActivo";
import BuscadorPorCabecera from "../../common/grids/busqueda/BuscadorPorCabecera";
import BuscadorPorSeleccion from "../../common/grids/busqueda/BuscadorPorSeleccion";
import BuscadorPorFecha from "../../common/grids/busqueda/BuscadorPorFecha";
import BotonReset from "../../common/grids/botones/BotonReset";
import FormatoFecha from "../../common/FormatoFecha";
import { Column } from "react-table";

const ColumnaGrid = (
  listaGenero: Map<number, string>,
  listaActivo: Map<boolean, string>
) => {
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
              onClick={() => alert(`${row.values.numero}`)}
            />
            <BotonEliminar
              href="#"
              onClick={() => alert(`${row.values.numero}`)}
            />
          </div>
        ),
      },
    ],
    []
  );

  return columns;
};

export default ColumnaGrid;
