export interface IUserRepository {
  autenticarUsuario(usuario: string, contrasenia: string): boolean;
}
