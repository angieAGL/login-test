import React from "react";
import { HeaderGroup } from "react-table";

const BuscadorMultiplesInput = (tabla: any, buscarMultiple:boolean) => {
  const { headerGroups } = tabla;
  return (
    <thead className=" cabecera_texto">
      {headerGroups.map((headerGroup:HeaderGroup) =>
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
