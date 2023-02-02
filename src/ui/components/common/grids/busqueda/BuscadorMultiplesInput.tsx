import React from "react";
import { TableInstance } from "react-table";

const BuscadorMultiplesInput = (tabla: TableInstance, buscarMultiple:boolean) => {
  const { headerGroups } = tabla;
  return (
    <thead className=" cabecera_texto">
      {headerGroups.map((headerGroup) =>
        headerGroup.headers.map((column:any) => (
          <th>
            {buscarMultiple ? (
              <div>{column.canFilter ? column.render("Filter") : null}</div>
            ) : null}
          </th>
        ))
      )}
    </thead>
  );
};

export default BuscadorMultiplesInput;
