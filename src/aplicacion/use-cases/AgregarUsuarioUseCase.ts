import { Usuario } from "../../dominio/entidades/Usuario";
import { IUsuarioRepository } from "../interfaces/IUsuarioRepository";

export class AgregarUsuarioUseCase {
  private _usuarioRepository: IUsuarioRepository;

  constructor(usuarioRepository: IUsuarioRepository) {
    this._usuarioRepository = usuarioRepository;
  }

  async agregarUsuario(usuario: Usuario): Promise<boolean> {
    return await this._usuarioRepository.agregarUsuario(usuario);
  }
}
