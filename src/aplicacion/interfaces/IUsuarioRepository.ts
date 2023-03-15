import { DatosUsuario } from "../../dominio/entidades/DatosUsuario";
import { Usuario } from "../../dominio/entidades/Usuario";

export interface IUsuarioRepository {
  listarUsuarios(): Promise<Usuario[]>;
  autenticarUsuario(usuario: string, contrasenia: string): Promise<boolean>;
  eliminarUsuario(id: number): Promise<boolean>;
  agregarUsuario(usuario: Usuario): Promise<boolean>;
  editarUsuario(usuario: Usuario): Promise<boolean>;
  obtenerUsuario(): DatosUsuario;
}
