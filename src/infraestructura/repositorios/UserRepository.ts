import { IUserRepository } from "../../aplicacion/interfaces/IUserRepository";
import DATASET_USUARIO from "../data-sets/DATASET_USUARIOS.json";
import { User } from "../../dominio/entidades/User";

export class UserRepository implements IUserRepository {
  async getUser(): Promise<User[]> {
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
    let listado_json = await this.getUser();

    let exito1 = listado_json.some(
      (user) => user.usuario === usuario && user.contrasenia === contrasenia
    );

    return exito1;
  }
}
