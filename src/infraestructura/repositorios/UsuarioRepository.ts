import { IUsuarioRepository } from "../../aplicacion/interfaces/IUsuarioRepository";
import { Usuario } from "../../dominio/entidades/Usuario";

export class UsuarioRepository implements IUsuarioRepository {
  async listarUsuarios(): Promise<Usuario[]> {
    let response = await fetch(
      "https://my-json-server.typicode.com/angieAGL/DatosUser/listaUSer"
    );

    let data = await response.json();

    return data;
  }
  async autenticarUsuario(
    usuario: string,
    contrasenia: string
  ): Promise<boolean> {
    let listado_json: Usuario[] = await this.listarUsuarios();

    let exito: boolean = listado_json.some(
      (user) => user.usuario === usuario && user.contrasenia === contrasenia
    );

    return exito;
  }

  async eliminarUsuario(id: number): Promise<boolean> {
    let listado_json: Usuario[] = await this.listarUsuarios();

    return listado_json.some((user) => user.id === id);
  }

  async agregarUsuario(usuario: Usuario): Promise<boolean> {
    let listado_json: Usuario[] = await this.listarUsuarios();

    if (usuario.id === 0) {
      return false;
    }
    listado_json.push(usuario);
    return true;
  }
  async editarUsuario(usuario: Usuario): Promise<boolean> {
    let listado_json: Usuario[] = await this.listarUsuarios();

    return listado_json.some((resp) => resp.id === usuario.id);
  }
}
