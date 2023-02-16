import { IUserRepository } from "../../aplicacion/interfaces/IUserRepository";
import DATASET_USUARIO from "../data-sets/DATASET_USUARIOS.json";

export class UserRepository implements IUserRepository {
  autenticarUsuario(usuario: string, contrasenia: string) {
    let listado_json = DATASET_USUARIO;

    return listado_json.some(
      (user) => user.usuario === usuario && user.contrasenia === contrasenia
    );
  }
}
