import { IUserRepository } from "../interfaces/IUserRepository";
import { User } from "../../dominio/entidades/User";

export class MostrarTablaUsersoUseCase {
  private _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  async mostrarTablaUsers() {
    let lista_users: User[] = await this._userRepository.listarUsers();

    return lista_users;
  }
}
