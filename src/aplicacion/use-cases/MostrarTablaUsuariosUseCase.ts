import { IUsuarioRepository } from "../interfaces/IUsuarioRepository";
import { Usuario } from "../../dominio/entidades/Usuario";

export class MostrarTablaUsuariosUseCase {
  private _usuarioRepository: IUsuarioRepository;

  constructor(usuarioRepository: IUsuarioRepository) {
    this._usuarioRepository = usuarioRepository;
  }

  async mostrarTablaUsuarios() {
    let lista_usuarios: Usuario[] =
      await this._usuarioRepository.listarUsuarios();

    return lista_usuarios;
  }
}
