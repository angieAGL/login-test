import { Demo } from "../../dominio/Demo";

export interface IDemoRepository {
  listarDemo(): Demo[];
}
