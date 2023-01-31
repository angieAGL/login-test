import { useMemo } from "react";
import { BotonEditar } from "../../common/grids/botones/BotonEditar";
import { BotonEliminar } from "../../common/grids/botones/BotonEliminar";
import CellActivo from "../../common/grids/CellActivo";
import BuscadorPorCabecera from "../../common/grids/busqueda/BuscadorPorCabecera";
import BuscadorPorSeleccion from "../../common/grids/busqueda/BuscadorPorSeleccion";
import BuscadorPorFecha from "../../common/grids/busqueda/BuscadorPorFecha";
import BotonReset from "../../common/grids/botones/BotonReset";
import FormatoFecha from "../../common/FormatoFecha";

const ColumnaGrid : any= () => {
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
        accessor: "numero",
        Filter: BuscadorPorCabecera,
      },
      {
        Header: "Fecha",
        accessor: "fecha",
        Filter: BuscadorPorFecha,
        Cell: ({ row }:any) => FormatoFecha(row.values.fecha),
      },
      {
        Header: "Activo",
        accessor: "activo",
        Filter: BuscadorPorSeleccion,
        Cell: ({ row }:any) => <CellActivo valor={row.values.activo} />,
      },
      {
        Header: "Accion",
        accessor: "accion",
        Filter: BotonReset,
        Cell: ({ row }:any) => (
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
