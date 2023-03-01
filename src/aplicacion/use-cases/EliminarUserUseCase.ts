import { IUserRepository } from "../interfaces/IUserRepository";

export class EliminarUserUseCase {
  private _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  async eliminaUser(id: number): Promise<boolean> {
    return await this._userRepository.eliminarUsuario(id);
  }
}
