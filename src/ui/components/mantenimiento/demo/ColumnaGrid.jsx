import { useMemo } from "react";
import { BotonEditar } from "../../common/grids/botones/BotonEditar";
import { BotonEliminar } from "../../common/grids/botones/BotonEliminar";
import CellActivo from "../../common/grids/CellActivo";
import BuscadorPorCabecera from "../../common/grids/busqueda/BuscadorPorCabecera";
import BuscadorPorSeleccion from "../../common/grids/busqueda/BuscadorPorSeleccion";
import BuscadorPorFecha from "../../common/grids/busqueda/BuscadorPorFecha";
import BotonReset from "../../common/grids/botones/BotonReset";
import FormatoFecha from "../../common/grids/FormatoFecha";

const ColumnaGrid = () => {
  const columns = useMemo(
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
        accessor: "genero",
        Filter: BuscadorPorSeleccion,
        filter: "includes",
      },
      {
        Header: "Numeros",
        accessor: "numeros",
        Filter: BuscadorPorCabecera,
      },
      {
        Header: "Fecha",
        accessor: "fecha",
        Filter: BuscadorPorFecha,
        /*Cell: ({ row }) => FormatoFecha(row.values.fecha),*/
      },
      {
        Header: "FechaFormato",
        accessor: "fechaFormato",
        Cell: ({ row }) => FormatoFecha(row.values.fecha),
        Filter: BuscadorPorFecha,
      },
      {
        Header: "Activo",
        accessor: "activo",
        Filter: BuscadorPorSeleccion,
        Cell: ({ row }) => <CellActivo valor={row.values.activo} />,
      },
      {
        Header: "Accion",
        accessor: "accion",
        Filter: BotonReset,
        Cell: ({ row }) => (
          <div>
            <BotonEditar
              href="#"
              onClick={() => alert(`${row.values.numeros}`)}
            />
            <BotonEliminar
              href="#"
              onClick={() => alert(`${row.values.numeros}`)}
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
