import { IUsuarioRepository } from "../interfaces/IUsuarioRepository";

export class EliminarUsuarioUseCase {
  private _usuarioRepository: IUsuarioRepository;

  constructor(usuarioRepository: IUsuarioRepository) {
    this._usuarioRepository = usuarioRepository;
  }

  async eliminaUsuario(id: number): Promise<boolean> {
    return await this._usuarioRepository.eliminarUsuario(id);
  }
}
