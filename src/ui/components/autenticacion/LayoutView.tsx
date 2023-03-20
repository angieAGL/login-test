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
          <Col sm={2}>{SideBar()}</Col>
          <Col sm={10}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default LayoutView;
