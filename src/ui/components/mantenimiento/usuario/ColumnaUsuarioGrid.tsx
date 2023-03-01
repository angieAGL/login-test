/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import { Column } from "react-table";
import { BotonEditar } from "../../common/grids/botones/BotonEditar";
import BuscadorPorCabecera from "../../common/grids/buscadores/BuscadorPorCabecera";
import BotonReset from "../../common/grids/botones/BotonReset";
import { Usuario } from "../../../../dominio/entidades/Usuario";
import UsuarioEvents from "../../../../presentacion/UsuarioEvents";
import { BotonEliminarUsuario } from "./BotonEliminarUsuario";

const ColumnaUsuarioGrid = (
  data: Usuario[],
  setData: React.Dispatch<React.SetStateAction<Usuario[]>>,
  funcionEliminar: UsuarioEvents
) => {
  const columns: Array<Column> = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        Filter: BuscadorPorCabecera,
      },
      {
        Header: "Usuario",
        accessor: "usuario",
        Filter: BuscadorPorCabecera,
      },
      {
        Header: "Contraseña",
        accessor: "contrasenia",
        Filter: BuscadorPorCabecera,
      },
      {
        Header: "Accion",
        accessor: "accion",
        Filter: BotonReset,
        Cell: ({ row }) => (
          <div>
            <BotonEditar
              href="#"
              onClick={() => {
                alert(`${row.values.usuario}`);
              }}
            />
            {BotonEliminarUsuario(row.index, data, setData, funcionEliminar)}
          </div>
        ),
      },
    ],
    [data, setData]
  );

  return columns;
};

export default ColumnaUsuarioGrid;
