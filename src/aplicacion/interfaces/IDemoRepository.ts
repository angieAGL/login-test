import { Demo } from "../../dominio/entidades/Demo";

export interface IDemoRepository {
  listarDemo(): Demo[];
  delete(id: number): boolean;
}
