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
import { OpcionesBuscar } from "../../common/grids/Interfaces/OpcionesBuscarInterface";
import { listarDemo } from "../../../../infractutura//repositorios/DemoRepository";
import {
  listar_genero,
  listar_activo,
} from "../../../../infractutura//repositorios/TipoRepository";

const DemoGridView = ({
  buscarSingle,
  buscarCabecera,
  buscarMultiple,
}: OpcionesBuscar) => {
  const columns = ColumnaGrid();
  const data = FilasGrid();

  console.log(listarDemo());
  console.log(listar_genero());
  console.log(listar_activo());
  const tabla: any = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: BuscadorPorCabecera } as object,
      initialState: {
        pageSize: TAMAÑO_PAGINAS,
        pageIndex: 0,
      } as object,
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  return (
    <div className="container-fluid grid">
      <h1 className="titulo">Mantenimiento </h1>
      {buscarSingle ? BuscadorSingleInput(tabla) : null}
      <div className="table-responsive">
        <table className="table table-hover table-borderless ">
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
