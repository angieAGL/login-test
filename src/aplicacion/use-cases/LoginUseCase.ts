import { IUserRepository } from "../interfaces/IUserRepository";
import { LoginResponse } from "../../dominio/responses/LoginResponse";

export class LoginUseCase {
  private _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  validarUsuario(usuario: string, contrasenia: string): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
      function obtener(userRepository: IUserRepository) {
        if (usuario === "" || contrasenia === "") {
          return { exito: false, mensaje: "Ingrese valores por favor" };
        }
        return userRepository.autenticarUsuario(usuario, contrasenia)
          ? { exito: true, mensaje: "Exito" }
          : { exito: false, mensaje: "Usuario o contraseña incorrecta" };
      }
      setTimeout(() => {
        return resolve(obtener(this._userRepository));
      });
    });
  }
}
