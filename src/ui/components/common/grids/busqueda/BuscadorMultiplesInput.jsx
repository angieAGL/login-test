import React from "react";

const BuscadorMultiplesInput = (tabla, buscarMultiple) => {
  const { headerGroups } = tabla;
  return (
    <thead className=" cabecera_texto">
      {headerGroups.map((headerGroup) =>
        headerGroup.headers.map((column) => (
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
