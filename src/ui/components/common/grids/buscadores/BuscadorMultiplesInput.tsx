import { HeaderGroup, TableInstance } from "react-table";

const BuscadorMultiplesInput = (tabla: TableInstance) => {
  const { headerGroups } = tabla;
  return (
    <thead className=" cabecera_texto">
      {headerGroups.map((headerGroup: HeaderGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column: any) => (
            <th {...column.getHeaderProps()}>
              {process.env.REACT_APP_BUSCAR_MULTIPLE === "true" ? (
                <div>{column.canFilter ? column.render("Filter") : null}</div>
              ) : null}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default BuscadorMultiplesInput;
