import React from "react";

const BuscadorMultiplesInput = (tabla:any, buscarMultiple:any) => {
  const { headerGroups } = tabla;
  return (
    <thead className=" cabecera_texto">
      {headerGroups.map((headerGroup:any) =>
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
