import { Demo } from "./Demo";
export type TablaDemo = {
  listaDemo: Demo[];
  listaGenero: Map<number, string>;
  listaActivo: Map<boolean, string>;
};
