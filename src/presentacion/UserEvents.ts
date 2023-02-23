import { IUserRepository } from "../aplicacion/interfaces/IUserRepository";
import { MostrarTablaUsersUseCase } from "../aplicacion/use-cases/MostrarTablaUsersUseCase";

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
}

export default UserEvents;
