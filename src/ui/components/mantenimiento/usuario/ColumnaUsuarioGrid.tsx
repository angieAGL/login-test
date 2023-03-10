import { useMemo } from "react";
import { Column } from "react-table";
import BuscadorPorCabecera from "../../common/grids/buscadores/BuscadorPorCabecera";
import BotonReset from "../../common/grids/botones/BotonReset";
import { Usuario } from "../../../../dominio/entidades/Usuario";
import UsuarioEvents from "../../../../presentacion/UsuarioEvents";
import { BotonEliminarUsuario } from "./BotonEliminarUsuario";
import { BotonEditarUsuario } from "./BotonEditarUsuario";

const ColumnaUsuarioGrid = (
  data: Usuario[],
  setData: React.Dispatch<React.SetStateAction<Usuario[]>>,
  funcionEvento: UsuarioEvents
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
            {BotonEditarUsuario(
              data,
              setData,
              funcionEvento,
              row.index,
              row.values
            )}
            {BotonEliminarUsuario(row.index, data, setData, funcionEvento)}
          </div>
        ),
      },
    ],
    [data, funcionEvento, setData]
  );

  return columns;
};

export default ColumnaUsuarioGrid;
