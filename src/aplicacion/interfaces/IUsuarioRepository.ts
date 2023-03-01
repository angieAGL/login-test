import { Usuario } from "../../dominio/entidades/Usuario";

export interface IUsuarioRepository {
  listarUsuarios(): Promise<Usuario[]>;
  autenticarUsuario(usuario: string, contrasenia: string): Promise<boolean>;
  eliminarUsuario(id: number): Promise<boolean>;
}