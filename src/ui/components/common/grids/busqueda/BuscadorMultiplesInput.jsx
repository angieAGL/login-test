import React from "react";

const BuscadorMultiplesInput = (tabla) => {
  const { headerGroups } = tabla;
  return (
    <div className="table-responsive">
      <table>
        <header>
          {headerGroups.map((headerGroup) =>
            headerGroup.headers.map((column) => (
              <th className="">
                {column.canFilter ? column.render("Filter") : null}
              </th>
            ))
          )}
        </header>
      </table>
    </div>
  );
};

export default BuscadorMultiplesInput;
