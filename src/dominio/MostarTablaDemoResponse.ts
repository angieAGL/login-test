import { Demo } from "./Demo";
export type MostarTablaDemoResponse = {
  listaDemo: Demo[];
  listaGenero: Map<number, string>;
  listaActivo: Map<boolean, string>;
};
