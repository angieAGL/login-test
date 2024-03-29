import { LoginUseCase } from "../aplicacion/use-cases/LoginUseCase";
import { IUsuarioRepository } from "../aplicacion/interfaces/IUsuarioRepository";
import { DatosLogin } from "../ui/components/Interfaces/DatosLoginInterface";

export class LoginEvents {
  private _userRepository: IUsuarioRepository;

  constructor(userRepository: IUsuarioRepository) {
    this._userRepository = userRepository;
  }

  onSubmit = async (data: DatosLogin) => {
    const validarDAtos = new LoginUseCase(this._userRepository);

    const valor = await validarDAtos.validarUsuario(
      data.usuario,
      data.contrasenia
    );

    return valor;
  };
}

export default LoginEvents;
