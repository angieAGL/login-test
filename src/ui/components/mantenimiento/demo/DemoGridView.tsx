import {
  useTable,
  useGlobalFilter,
  usePagination,
  useFilters,
} from "react-table";
import ColumnaGrid from "./ColumnaDemoGrid";
import FilasGrid from "./FilasDemoGrid";
import "../../../css/gridView.css";
import Paginacion from "../../common/grids/Paginacion";
import { TAMAÑO_PAGINAS } from "../../../../cross-cutting/Constants";
import Cabecera from "../../common/grids/Cabecera";
import Cuerpo from "../../common/grids/Cuerpo";
import BuscadorSingleInput from "../../common/grids/buscadores/BuscadorSingleInput";
import BuscadorPorCabecera from "../../common/grids/buscadores/BuscadorPorCabecera";
import BuscadorMultiplesInput from "../../common/grids/buscadores/BuscadorMultiplesInput";
import { DemoEvents } from "../../../../presentacion/DemoEvents";
import { useInfraestructureRepository } from "../../common/base/Dependencies";
import { Table, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Demo } from "../../../../dominio/entidades/Demo";
import { BotonAgregarDemo } from "./BotonAgregarDemo";

const DemoGridView = () => {
  const { demoRepository, tipoRepository } = useInfraestructureRepository();
  const [listaDemo, setListaDemo] = useState<Demo[]>([]);
  const [listaGenero, setListaGenero] = useState<Map<number, string>>(
    new Map()
  );
  const [listaActivo, setListaActivo] = useState<Map<boolean, string>>(
    new Map()
  );
  const [demoEvento] = useState(new DemoEvents(demoRepository, tipoRepository));
  useEffect(() => {
    demoEvento.onLoad().then((res) => {
      setListaDemo(res.listaDemo);
      setListaGenero(res.listaGenero);
      setListaActivo(res.listaActivo);
    });
  }, [demoEvento]);

  const data = FilasGrid(listaDemo);
  const columns = ColumnaGrid(
    listaGenero,
    listaActivo,
    listaDemo,
    setListaDemo,
    demoEvento
  );

  const tabla: any = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: BuscadorPorCabecera } as object,
      initialState: {
        pageSize: TAMAÑO_PAGINAS,
        pageIndex: 0,
        hiddenColumns: ["genero"],
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
      {BotonAgregarDemo(listaGenero)}
    </Container>
  );
};

export default DemoGridView;
