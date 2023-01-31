import React from "react";
import {
  useTable,
  useGlobalFilter,
  usePagination,
  useFilters,
} from "react-table";
import ColumnaGrid from "./ColumnaGrid";
import FilasGrid from "./FilasGrid";
import "../../../css/gridView.css";
import Paginacion from "../../common/grids/Paginacion";
import { TAMAÑO_PAGINAS } from "../../../../cross-cutting/constant";
import Cabecera from "../../common/grids/Cabecera";
import Cuerpo from "../../common/grids/Cuerpo";
import BuscadorSingleInput from "../../common/grids/busqueda/BuscadorSingleInput";
import BuscadorPorCabecera from "../../common/grids/busqueda/BuscadorPorCabecera";
import BuscadorMultiplesInput from "../../common/grids/busqueda/BuscadorMultiplesInput";

const DemoGridView = ({ buscarSingle, buscarCabecera, buscarMultiple }:any) => {
  const columns = ColumnaGrid();
  const data = FilasGrid();

  const tabla = useTable(
    {
      columns,
      data,
      //defaultColumn: { Filter: BuscadorPorCabecera },
      initialState: {
        //pageSize: TAMAÑO_PAGINAS,
        //pageIndex: 0,
      },
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  const { getTableProps } = tabla;

  return (
    <div className="container-fluid grid">
      <h1 className="titulo">Mantenimiento </h1>
      {buscarSingle ? BuscadorSingleInput(tabla) : null}
      <div className="table-responsive">
        <table
          className="table table-hover table-borderless "
          {...getTableProps()}
        >
          {BuscadorMultiplesInput(tabla, buscarMultiple)}
          {Cabecera(tabla, buscarCabecera)}
          {Cuerpo(tabla)}
        </table>
      </div>

      {Paginacion(tabla)}
    </div>
  );
};

export default DemoGridView;
