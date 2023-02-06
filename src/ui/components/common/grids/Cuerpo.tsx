import React from "react";
import { Cell, Row } from "react-table";
import "../../../css/cuerpo.css";

const Cuerpo = (tabla:any) => {
  const { getTableBodyProps, prepareRow, page } = tabla;

  return (
    <tbody className="cuerpo cuerpo_texto" {...getTableBodyProps()}>
      {
        // Recorremos las filas
        page.map((row: Row) => {
          // Llamamos a la función que prepara la fila previo renderizado
          prepareRow(row);
          return (
            // Añadimos las propiedades a la fila
            <tr {...row.getRowProps()}>
              {
                // Recorremos cada celda de la fila
                row.cells.map((cell: Cell) => {
                  // Añadimos las propiedades a cada celda de la fila
                  return (
                    <td {...cell.getCellProps()}>
                      {
                        // Pintamos el contenido de la celda
                        cell.render("Cell")
                      }
                    </td>
                  );
                })
              }
            </tr>
          );
        })
      }
    </tbody>
  );
};

export default Cuerpo;
