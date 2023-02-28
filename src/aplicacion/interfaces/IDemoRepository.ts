import { Demo } from "../../dominio/entidades/Demo";

export interface IDemoRepository {
  listarDemo(): Promise<Demo[]>;
  eliminarDemo(id: number): Promise<boolean>;
}
