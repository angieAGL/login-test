import { useState } from "react";
import { Col, Container, Form, Row, Stack } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { Demo } from "../../../../dominio/entidades/Demo";
import { DemoEvents } from "../../../../presentacion/DemoEvents";
import { useInfraestructureRepository } from "../../common/base/Dependencies";
import Boton from "../../common/grids/botones/Boton";
import FormularioDemoValidacion from "./FormularioDemoHook";

const FormularioDemoView = () => {
  const { demoRepository, tipoRepository } = useInfraestructureRepository();
  const [demoEvento] = useState(new DemoEvents(demoRepository, tipoRepository));
  const navigate = useNavigate();
  const loction = useLocation();
  const parametros = loction.state;

  const {
    handleSubmit,
    reset,
    generoValidar,
    idValidar,
    nombreValidar,
    apellidoValidar,
    emailValidar,
    fechaValidar,
    numeroValidar,
    mensajeErrorId,
    mensajeErrorNombre,
    mensajeErrorApellido,
    mensajeErrorEmail,
    mensajeErrorFecha,
    mensajeErrorGenero,
    mensajeErrorNumero,
  } = FormularioDemoValidacion(parametros.initialData);

  const options: JSX.Element[] = [];

  parametros.listaGenero.forEach((value: string, key: number) => {
    options.push(
      <option key={key} value={key}>
        {value}
      </option>
    );
  });

  const funcionSubmit = async (data: Demo) => {
    data.genero = parametros.listaGenero.get(Number(data.id_genero)) as string;
    (parametros.modoEditar
      ? demoEvento.onClickEditar(data)
      : demoEvento.onClickAgregar(data)
    ).then((resp) => {
      if (resp) {
        reset();
        navigate("/mantenimiento/demo");
      }
    });
  };

  return (
    <Container className="grid h-100 mt-2">
      <Form onSubmit={handleSubmit(funcionSubmit)}>
        <h1 className="titulo mt-4">
          {parametros.modoEditar ? "Editar Demo" : "Agregar Demo "}
        </h1>
        <Row className="mt-3">
          <Col sm>
            <Form.Group className="mb-2">
              <Form.Label className="form-label ">ID</Form.Label>
              <Form.Control
                disabled={parametros.modoEditar}
                className={
                  mensajeErrorId
                    ? "form-control error"
                    : "form-control correcto"
                }
                type="number"
                {...idValidar}
              ></Form.Control>
              {<p style={{ color: "var(--color-error)" }}>{mensajeErrorId}</p>}
            </Form.Group>
          </Col>
          <Col sm>
            <Form.Group className="mb-2">
              <Form.Label className="form-label">Nombre</Form.Label>
              <Form.Control
                className={
                  mensajeErrorNombre
                    ? "form-control error"
                    : "form-control correcto"
                }
                type="text"
                {...nombreValidar}
              ></Form.Control>
              {
                <p style={{ color: "var(--color-error)" }}>
                  {mensajeErrorNombre}
                </p>
              }
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Form.Group className="mb-2">
              <Form.Label className="form-label">Apellido</Form.Label>
              <Form.Control
                className={
                  mensajeErrorApellido
                    ? "form-control error"
                    : "form-control correcto"
                }
                type="text"
                {...apellidoValidar}
              ></Form.Control>
              {
                <p style={{ color: "var(--color-error)" }}>
                  {mensajeErrorApellido}
                </p>
              }
            </Form.Group>
          </Col>
          <Col sm>
            <Form.Group className="mb-2">
              <Form.Label className="form-label">Email</Form.Label>
              <Form.Control
                className={
                  mensajeErrorEmail
                    ? "form-control error"
                    : "form-control correcto"
                }
                type="email"
                {...emailValidar}
              ></Form.Control>
              {
                <p style={{ color: "var(--color-error)" }}>
                  {mensajeErrorEmail}
                </p>
              }
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Form.Group className="mb-2">
              <Form.Label className="form-label">Genero</Form.Label>
              <Form.Select
                className={
                  mensajeErrorGenero
                    ? "form-control error"
                    : "form-control correcto"
                }
                {...generoValidar}
              >
                <option value={0}>Seleccione</option>
                {options};
              </Form.Select>
              {
                <p style={{ color: "var(--color-error)" }}>
                  {mensajeErrorGenero}
                </p>
              }
            </Form.Group>
          </Col>
          <Col sm>
            <Form.Group className="mb-2">
              <Form.Label className="form-label">Numero</Form.Label>
              <Form.Control
                className={
                  mensajeErrorNumero
                    ? "form-control error"
                    : "form-control correcto"
                }
                type="number"
                {...numeroValidar}
              ></Form.Control>
              {
                <p style={{ color: "var(--color-error)" }}>
                  {mensajeErrorNumero}
                </p>
              }
            </Form.Group>
          </Col>
          <Col sm>
            <Form.Group className="mb-2">
              <Form.Label className="form-label">Fecha</Form.Label>
              <Form.Control
                className={
                  mensajeErrorFecha
                    ? "form-control error"
                    : "form-control correcto"
                }
                type="date"
                id={"fecha"}
                {...fechaValidar}
              ></Form.Control>
              {
                <p style={{ color: "var(--color-error)" }}>
                  {mensajeErrorFecha}
                </p>
              }
            </Form.Group>
          </Col>
        </Row>
        <Stack direction="horizontal" gap={4} className={"mt-3 mb-3"}>
          <Boton
            class_name={"btn-cerrar ms-auto"}
            href={"/mantenimiento/demo"}
            text={"Cancelar"}
            type={"button"}
          />

          <Boton text={"Guardar"} type={"submit"} />
        </Stack>
      </Form>
    </Container>
  );
};

export default FormularioDemoView;
