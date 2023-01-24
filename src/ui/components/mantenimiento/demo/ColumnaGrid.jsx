import { useMemo } from "react";
import { BotonEditar } from "../../common/grids/botones/BotonEditar";
import { BotonEliminar } from "../../common/grids/botones/BotonEliminar";
import CellActivo from "../../common/grids/CellActivo";
import BuscadorPorCabecera from "../../common/grids/busqueda/BuscadorPorCabecera";

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
        Filter: BuscadorPorCabecera,

      },
      {
        Header: "Numeros",
        accessor: "numeros",
        Filter: BuscadorPorCabecera,

      },
      {
        Header: "Fecha",
        accessor: "fecha",
        Filter: BuscadorPorCabecera,

      },
      {
        Header: "Activo",
        accessor: "activo",
        Filter: BuscadorPorCabecera,
        Cell: ({ row }) => <CellActivo valor={row.values.activo} />,
        
      },
      {
        Header: "Accion",
        accessor: "accion",
        disableFilters: true,
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
