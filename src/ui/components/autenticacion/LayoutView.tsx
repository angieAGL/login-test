import { DatosUsuario } from "../../../dominio/entidades/DatosUsuario";
import { getCookie } from "../utils/FuncionCookie";
import NavBar from "../common/NavBar";
import SideBar from "../common/SideBar";
import { Outlet } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const LayoutView = () => {
  const userCookie = getCookie("session");
  const datos: DatosUsuario = JSON.parse(userCookie as string);
  return (
    <>
      <section>
        <NavBar datos={datos} modoLogin={false} />
      </section>
      <section>
        <Row>
          <Col className="col-2 w-10">{SideBar()}</Col>
          <Col className="col-10">
            <Outlet></Outlet>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default LayoutView;
