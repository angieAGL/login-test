import { LoginUseCase } from "../aplicacion/use-cases/LoginUseCase";

import { IUserRepository } from "../aplicacion/interfaces/IUserRepository";

export class LoginEvents {
  private _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  onSubmit = async (data: any) => {
    const validarDAtos = new LoginUseCase(this._userRepository);

    const valor = await validarDAtos.validarUsuario(
      data.usuario,
      data.contrasenia
    );

    return valor;

    /*const respuesta =  validarDAtos.validarUsuario(
        data.usuario,
        data.contrasenia
      );
      return respuesta;*/
  };
}

export default LoginEvents;
