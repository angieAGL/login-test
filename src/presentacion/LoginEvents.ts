import { LoginUseCase } from "../aplicacion/use-cases/LoginUseCase";

import { IUserRepository } from "../aplicacion/interfaces/IUserRepository";

const LoginEvents = (userRepository: IUserRepository) => {
  const onSubmit = (data: any) => {
    const validarDAtos = new LoginUseCase(userRepository);

    const respuesta = validarDAtos.validarUsuario(
      data.usuario,
      data.contrasenia
    );

    console.log(respuesta);
  };

  return { onSubmit };
};

export default LoginEvents;
