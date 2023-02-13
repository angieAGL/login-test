import { HeaderGroup } from "react-table";

const BuscadorMultiplesInput = (tabla: any) => {
  const { headerGroups } = tabla;
  return (
    <thead className=" cabecera_texto">
      {headerGroups.map((headerGroup: HeaderGroup) =>
        headerGroup.headers.map((column: any) => (
          <th>
            {process.env.REACT_APP_BUSCAR_MULTIPLE === "true" ? (
              <div>{column.canFilter ? column.render("Filter") : null}</div>
            ) : null}
          </th>
        ))
      )}
    </thead>
  );
};

export default BuscadorMultiplesInput;
