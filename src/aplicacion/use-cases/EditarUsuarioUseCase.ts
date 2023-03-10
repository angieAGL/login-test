import { Usuario } from "../../dominio/entidades/Usuario";
import { IUsuarioRepository } from "../interfaces/IUsuarioRepository";

export class EditarUsuarioUseCase {
  private _usuarioRepository: IUsuarioRepository;

  constructor(usuarioRepository: IUsuarioRepository) {
    this._usuarioRepository = usuarioRepository;
  }

  async editarUsuario(usuario: Usuario): Promise<boolean> {
    return await this._usuarioRepository.editarUsuario(usuario);
  }
}
