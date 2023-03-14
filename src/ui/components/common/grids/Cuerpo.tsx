import { Cell, Row } from "react-table";
import "../../../css/cuerpo.css";
import { TableInterface } from "../../Interfaces/TablaInterface";

const Cuerpo = (tabla: TableInterface<{}>) => {
  const { getTableBodyProps, prepareRow, page } = tabla;

  return (
    <tbody className="cuerpo cuerpo-texto" {...getTableBodyProps()}>
      {page.map((row: Row) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell: Cell) => {
              return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default Cuerpo;
