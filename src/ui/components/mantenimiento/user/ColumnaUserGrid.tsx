/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import BuscadorPorCabecera from "../../common/grids/buscadores/BuscadorPorCabecera";
import { Column } from "react-table";

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
    ],
    []
  );

  return columns;
};

export default ColumnaGrid;
