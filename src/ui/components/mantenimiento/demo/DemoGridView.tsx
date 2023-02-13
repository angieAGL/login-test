import {
  useTable,
  useGlobalFilter,
  usePagination,
  useFilters,
} from "react-table";
import ColumnaGrid from "./ColumnaGrid";
import FilasGrid from "./FilasGrid";
import "../../../css/gridView.css";
import Paginacion from "../../common/grids/Paginacion";
import { TAMAÑO_PAGINAS } from "../../../../cross-cutting/Constants";
import Cabecera from "../../common/grids/Cabecera";
import Cuerpo from "../../common/grids/Cuerpo";
import BuscadorSingleInput from "../../common/grids/busquedas/BuscadorSingleInput";
import BuscadorPorCabecera from "../../common/grids/busquedas/BuscadorPorCabecera";
import BuscadorMultiplesInput from "../../common/grids/busquedas/BuscadorMultiplesInput";
import { DemoEvents } from "../../../../presentacion/DemoEvents";
import { useInfraestructureRepository } from "../../common/base/Dependencies";

const DemoGridView = () => {
  const { demoRepository, tipoRepository } = useInfraestructureRepository();
  const demoEvento = new DemoEvents(demoRepository, tipoRepository);

  const { listaDemo, listaGenero, listaActivo } = demoEvento.onLoad();

  const columns = ColumnaGrid(listaGenero, listaActivo);
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
    <div className="container-fluid grid">
      <h1 className="titulo">Mantenimiento </h1>
      {BuscadorSingleInput(tabla)}
      <div className="table-responsive">
        <table
          className="table table-hover table-borderless "
          {...getTableProps()}
        >
          {BuscadorMultiplesInput(tabla)}
          {Cabecera(tabla)}
          {Cuerpo(tabla)}
        </table>
      </div>

      {Paginacion(tabla)}
    </div>
  );
};

export default DemoGridView;
