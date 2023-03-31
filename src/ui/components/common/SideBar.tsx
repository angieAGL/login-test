import { Nav } from "react-bootstrap";
import "../../css/sideBar.css";
import { FaUsers } from "react-icons/fa";
import { BsTable } from "react-icons/bs";

const SideBar = (mostrarSidebar: boolean) => {
  return (
    <>
      {mostrarSidebar ? (
        <Nav className=" flex-column sidebar">
          <div>
            <Nav.Link
              className="nav sidebar-texto sidebar-contenido"
              href="/mantenimiento/demo"
            >
              <BsTable className="iconos-sidebar" />
              Demo
            </Nav.Link>
            <Nav.Link
              className="nav sidebar-texto sidebar-contenido"
              href="/mantenimiento/usuario"
            >
              <FaUsers className="iconos-sidebar" />
              Usuario
            </Nav.Link>
          </div>
        </Nav>
      ) : null}
    </>
  );
};

export default SideBar;
