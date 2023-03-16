import ColumnaUsuarioGrid from "./ColumnaUsuarioGrid";
import FilasUsuarioGrid from "./FilasUsuarioGrid";
import "../../../css/gridView.css";
import Paginacion from "../../common/grids/Paginacion";
import { TAMAÑO_PAGINAS } from "../../../../cross-cutting/Constants";
import Cabecera from "../../common/grids/Cabecera";
import Cuerpo from "../../common/grids/Cuerpo";
import BuscadorSingleInput from "../../common/grids/buscadores/BuscadorSingleInput";
import BuscadorPorCabecera from "../../common/grids/buscadores/BuscadorPorCabecera";
import BuscadorMultiplesInput from "../../common/grids/buscadores/BuscadorMultiplesInput";
import { UsuarioEvents } from "../../../../presentacion/UsuarioEvents";
import { useInfraestructureRepository } from "../../common/base/Dependencies";
import { Table, Container, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Usuario } from "../../../../dominio/entidades/Usuario";
import { BotonAgregarUsuario } from "./BotonAgregarUsuario";
import { TableInterface } from "../../Interfaces/TablaInterface";
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useTable,
} from "react-table";

const UsuarioGridView = () => {
  const { usuarioRepositoy } = useInfraestructureRepository();
  const [listaUsuarios, setListaUsuarios] = useState<Usuario[]>([]);
  const [userEvento] = useState(new UsuarioEvents(usuarioRepositoy));

  useEffect(() => {
    userEvento.onLoad().then((response) => {
      setListaUsuarios(response);
    });
  }, [userEvento]);

  const columns = ColumnaUsuarioGrid(
    listaUsuarios,
    setListaUsuarios,
    userEvento
  );
  const data = FilasUsuarioGrid(listaUsuarios);
  const tabla = useTable(
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
  ) as TableInterface<{}>;
  const { getTableProps } = tabla;

  return (
    <Container fluid className="grid min-vh-100 mt-2">
      <div className="d-grid">
        <h1 className="titulo mt-4">Mantenimiento de Usuario</h1>
        <Col style={{ textAlign: "right" }}>
          {BotonAgregarUsuario(listaUsuarios, setListaUsuarios, userEvento)}
        </Col>
      </div>
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

export default UsuarioGridView;
