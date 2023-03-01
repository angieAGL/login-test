import { IUserRepository } from "../aplicacion/interfaces/IUserRepository";
import { MostrarTablaUsersUseCase } from "../aplicacion/use-cases/MostrarTablaUsersUseCase";
import { EliminarUserUseCase } from "../aplicacion/use-cases/EliminarUserUseCase";

export class UserEvents {
  private _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  onLoad = async () => {
    const mostrarTabla = new MostrarTablaUsersUseCase(this._userRepository);

    const valor = await mostrarTabla.mostrarTablaUsers();

    return valor;
  };
  async onClickDelete(id: number) {
    const eliminarUser = new EliminarUserUseCase(this._userRepository);

    return await eliminarUser.eliminaUser(id);
  }
}

export default UserEvents;
