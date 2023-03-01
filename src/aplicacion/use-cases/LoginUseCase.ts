import { IUsuarioRepository } from "../interfaces/IUsuarioRepository";
import { LoginResponse } from "../../dominio/responses/LoginResponse";

export class LoginUseCase {
  private _usuarioRepository: IUsuarioRepository;

  constructor(usuarioRepository: IUsuarioRepository) {
    this._usuarioRepository = usuarioRepository;
  }

  async validarUsuario(
    usuario: string,
    contrasenia: string
  ): Promise<LoginResponse> {
    if (usuario === "" || contrasenia === "") {
      return { exito: false, mensaje: "Ingrese valores por favor" };
    }

    let valor = await this._usuarioRepository
      .autenticarUsuario(usuario, contrasenia)
      .then((valor) => {
        return valor
          ? { exito: true, mensaje: "Exito" }
          : { exito: false, mensaje: "Usuario o contraseña incorrecta" };
      });

    return valor;
  }
}
