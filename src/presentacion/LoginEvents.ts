import { LoginUseCase } from "../aplicacion/use-cases/LoginUseCase";

import { IUserRepository } from "../aplicacion/interfaces/IUserRepository";

const LoginEvents = (userRepository: IUserRepository, setRespuesta: any) => {
  const onSubmit = (data: any) => {
    const validarDAtos = new LoginUseCase(userRepository);

    const respuesta = validarDAtos.validarUsuario(
      data.usuario,
      data.contrasenia
    );
    setRespuesta(respuesta);
  };

  return { onSubmit };
};

export default LoginEvents;
