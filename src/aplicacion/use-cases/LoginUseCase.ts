import { IUserRepository } from "../interfaces/IUserRepository";
import { LoginResponse } from "../../dominio/responses/LoginResponse";

export class LoginUseCase {
  private _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  async validarUsuario(
    usuario: string,
    contrasenia: string
  ): Promise<LoginResponse> {
    if (usuario === "" || contrasenia === "") {
      return { exito: false, mensaje: "Ingrese valores por favor" };
    }

    let valor = await this._userRepository
      .autenticarUsuario(usuario, contrasenia)
      .then((valor) => {
        return valor
          ? { exito: true, mensaje: "Exito" }
          : { exito: false, mensaje: "Usuario o contraseña incorrecta" };
      });

    return valor;
  }
}
