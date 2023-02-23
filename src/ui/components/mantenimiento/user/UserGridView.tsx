import {
  useTable,
  useGlobalFilter,
  usePagination,
  useFilters,
} from "react-table";
import ColumnaGrid from "./ColumnaUserGrid";
import FilasGrid from "./FilasUserGrid";
import "../../../css/gridView.css";
import Paginacion from "../../common/grids/Paginacion";
import { TAMAÑO_PAGINAS } from "../../../../cross-cutting/Constants";
import Cabecera from "../../common/grids/Cabecera";
import Cuerpo from "../../common/grids/Cuerpo";
import BuscadorSingleInput from "../../common/grids/buscadores/BuscadorSingleInput";
import BuscadorPorCabecera from "../../common/grids/buscadores/BuscadorPorCabecera";
import BuscadorMultiplesInput from "../../common/grids/buscadores/BuscadorMultiplesInput";
import { UserEvents } from "../../../../presentacion/UserEvents";
import { useInfraestructureRepository } from "../../common/base/Dependencies";
import { Table, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { User } from "../../../../dominio/entidades/User";

const UserGridView = () => {
  const { userRepositoy } = useInfraestructureRepository();
  const [data1, setData1] = useState<User[]>([]);

  useEffect(() => {
    const userEvento = new UserEvents(userRepositoy);

    userEvento.onLoad().then((response) => {
      setData1(response);
    });
  }, [userRepositoy]);

  const columns = ColumnaGrid();
  const data = FilasGrid(data1);
  const tabla: any = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: BuscadorPorCabecera } as object,
      initialState: {
        pageSize: TAMAÑO_PAGINAS,
        pageIndex: 0,
      } as object,
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );
  const { getTableProps } = tabla;

  return (
    <Container fluid className="grid">
      <h1 className="titulo">Mantenimiento </h1>
      {BuscadorSingleInput(tabla)}
      <Table responsive hover borderless {...getTableProps()}>
        {BuscadorMultiplesInput(tabla)}
        {Cabecera(tabla)}
        {Cuerpo(tabla)}
      </Table>
      {Paginacion(tabla)}
    </Container>
  );
};

export default UserGridView;
