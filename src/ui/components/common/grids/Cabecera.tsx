import "../../../css/cabecera.css";
import { TableInterface } from "../../Interfaces/TablaInterface";

const Cabecera = (tabla: TableInterface<{}>) => {
  const { headerGroups } = tabla;

  return (
    <thead className="cabecera cabecera-texto">
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column: any) => (
            <th {...column.getHeaderProps()}>
              {column.render("Header")}
              {process.env.REACT_APP_BUSCAR_CABECERA === "true" ? (
                <div>{column.canFilter ? column.render("Filter") : null}</div>
              ) : null}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default Cabecera;
