import { User } from "../../dominio/entidades/User";
export interface IUserRepository {
  getUser(): Promise<User[]>;
  autenticarUsuario(usuario: string, contrasenia: string): Promise<boolean>;
}
