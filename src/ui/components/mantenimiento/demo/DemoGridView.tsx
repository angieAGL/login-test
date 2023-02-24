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

const DemoGridView = () => {
  const { demoRepository, tipoRepository } = useInfraestructureRepository();
  const demoEvento = new DemoEvents(demoRepository, tipoRepository);

  const { listaDemo, listaGenero, listaActivo } = demoEvento.onLoad();
  const columns = ColumnaGrid(listaGenero, listaActivo, demoEvento);
  const data = FilasGrid(listaDemo);
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
    </Container>
  );
};

export default DemoGridView;
