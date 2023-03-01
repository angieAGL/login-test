import { User } from "../../dominio/entidades/User";

export interface IUserRepository {
  listarUsers(): Promise<User[]>;
  autenticarUsuario(usuario: string, contrasenia: string): Promise<boolean>;
  eliminarUsuario(id: number): Promise<boolean>;
}
