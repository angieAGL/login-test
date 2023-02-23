import { IUserRepository } from "../../aplicacion/interfaces/IUserRepository";
import { User } from "../../dominio/entidades/User";

export class UserRepository implements IUserRepository {
  async listarUsers(): Promise<User[]> {
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
    let listado_json: User[] = await this.listarUsers();

    let exito: boolean = listado_json.some(
      (user) => user.usuario === usuario && user.contrasenia === contrasenia
    );

    return exito;
  }
}
