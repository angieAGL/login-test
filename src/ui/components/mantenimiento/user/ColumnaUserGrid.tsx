/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import { Column } from "react-table";
import { BotonEditar } from "../../common/grids/botones/BotonEditar";
import BuscadorPorCabecera from "../../common/grids/buscadores/BuscadorPorCabecera";
import BotonReset from "../../common/grids/botones/BotonReset";

const ColumnaGrid = () => {
  const columns: Array<Column> = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        Filter: BuscadorPorCabecera,
      },
      {
        Header: "Usuario",
        accessor: "usuario",
        Filter: BuscadorPorCabecera,
      },
      {
        Header: "Contraseña",
        accessor: "contrasenia",
        Filter: BuscadorPorCabecera,
      },
      {
        Header: "Accion",
        accessor: "accion",
        Filter: BotonReset,
        Cell: ({ row }) => (
          <div>
            <BotonEditar
              href="#"
              onClick={() => alert(`${row.values.usuario}`)}
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
