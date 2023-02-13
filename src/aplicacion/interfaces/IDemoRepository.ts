import { Demo } from "../../dominio/entidad/Demo";

export interface IDemoRepository {
  listarDemo(): Demo[];
}
