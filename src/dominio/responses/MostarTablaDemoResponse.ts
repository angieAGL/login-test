import { Demo } from "../entidades/Demo";

export type MostarTablaDemoResponse = {
  listaDemo: Demo[];
  listaGenero: Map<number, string>;
  listaActivo: Map<boolean, string>;
};
