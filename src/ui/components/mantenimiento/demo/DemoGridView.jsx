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

const DemoGridView = ({ buscarSingle, buscarCabecera }) => {
  const columns = ColumnaGrid();
  const data = FilasGrid();

  const tabla = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: BuscadorPorCabecera },
      initialState: {
        pageSize: TAMAÑO_PAGINAS,
        pageIndex: 0,
      },
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  const { getTableProps, headerGroups } = tabla;
  return (
    <div className="container-fluid grid">
      <h1 className="titulo">Mantenimiento </h1>
      {buscarSingle ? BuscadorSingleInput(tabla) : null}
      <div className="table-responsive">
        <table
          className="table table-hover table-borderless "
          {...getTableProps()}
        >
          <thead className="cabecera cabecera_texto">
            {
              // Recorremos las columnas que previamente definimos
              headerGroups.map((headerGroup) => (
                // Añadimos las propiedades al conjunto de columnas
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Recorremos cada columna del conjunto para acceder a su información
                    headerGroup.headers.map((column) => (
                      // Añadimos las propiedades a cada celda de la cabecera
                      <th {...column.getHeaderProps()}>
                        {
                          // Pintamos el título de nuestra columna (propiedad "Header")
                          column.render("Header")
                        }
                        {buscarCabecera ? (
                          <div>
                            {column.canFilter ? column.render("Filter") : null}
                          </div>
                        ) : null}
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {Cuerpo(tabla)}
        </table>
      </div>

      {Paginacion(tabla)}
    </div>
  );
};

export default DemoGridView;
