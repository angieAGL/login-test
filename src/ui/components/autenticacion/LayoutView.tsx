import { DatosUsuario } from "../../../dominio/entidades/DatosUsuario";
import { getCookie } from "../utils/FuncionCookie";

const LayoutView = () => {
  const userCookie = getCookie("session");
  const datos: DatosUsuario = JSON.parse(userCookie as string);
  return (
    <>
      <h1>Estas loggeado: {datos.nombre} </h1>
    </>
  );
};

export default LayoutView;
