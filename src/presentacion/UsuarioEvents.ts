import { IUsuarioRepository } from "../aplicacion/interfaces/IUsuarioRepository";
import { MostrarTablaUsuariosUseCase } from "../aplicacion/use-cases/MostrarTablaUsuariosUseCase";
import { EliminarUsuarioUseCase } from "../aplicacion/use-cases/EliminarUsuarioUseCase";

export class UsuarioEvents {
  private _usuarioRepository: IUsuarioRepository;

  constructor(usuarioRepository: IUsuarioRepository) {
    this._usuarioRepository = usuarioRepository;
  }

  onLoad = async () => {
    const mostrarTabla = new MostrarTablaUsuariosUseCase(
      this._usuarioRepository
    );

    const valor = await mostrarTabla.mostrarTablaUsuarios();

    return valor;
  };
  async onClickEliminar(id: number) {
    const eliminarUsuario = new EliminarUsuarioUseCase(this._usuarioRepository);

    return await eliminarUsuario.eliminaUsuario(id);
  }
}

export default UsuarioEvents;
