import { InfraestructureProvider } from "./dependency-injection/InfraestructureInjector";
import DemoGridView from "./ui/components/mantenimiento/demo/DemoGridView";
import UsuarioGridView from "./ui/components/mantenimiento/usuario/UsuarioGridView";
import LoginView from "./ui/components/autenticacion/LoginView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormularioDemoView from "./ui/components/mantenimiento/demo/FormularioDemoView";
import ErrorView from "./ui/components/ErrorView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <InfraestructureProvider>
              <LoginView />
            </InfraestructureProvider>
          }
        ></Route>
        <Route
          path="/mantenimiento/demo"
          element={
            <InfraestructureProvider>
              <DemoGridView />
            </InfraestructureProvider>
          }
        ></Route>
        <Route
          path="/mantenimiento/usuario"
          element={
            <InfraestructureProvider>
              <UsuarioGridView />
            </InfraestructureProvider>
          }
        ></Route>
        <Route
          path={"/mantenimiento/demo/agregar"}
          element={
            <InfraestructureProvider>
              <FormularioDemoView />
            </InfraestructureProvider>
          }
        ></Route>
        <Route
          path={"/mantenimiento/demo/editar"}
          element={
            <InfraestructureProvider>
              <FormularioDemoView />
            </InfraestructureProvider>
          }
        ></Route>
        <Route path="*" element={<ErrorView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
