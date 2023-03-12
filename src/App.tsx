import { InfraestructureProvider } from "./dependency-injection/InfraestructureInjector";
import DemoGridView from "./ui/components/mantenimiento/demo/DemoGridView";
import UsuarioGridView from "./ui/components/mantenimiento/usuario/UsuarioGridView";
import LoginView from "./ui/components/autenticacion/LoginView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormularioDemoView from "./ui/components/mantenimiento/demo/FormularioDemoView";
import ErrorView from "./ui/components/ErrorView";
import { AuthProvider } from "./ui/components/autenticacion/AuthContext";
import { RutasPrivadas } from "./ui/components/common/base/RutasPrivadas";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <InfraestructureProvider>
                <LoginView />
              </InfraestructureProvider>
            }
          ></Route>

          <Route element={<RutasPrivadas />}>
            <Route
              index
              path="/mantenimiento/demo"
              element={
                <InfraestructureProvider>
                  <DemoGridView />
                </InfraestructureProvider>
              }
            ></Route>
            <Route
              index
              path={"/mantenimiento/demo/editar"}
              element={
                <InfraestructureProvider>
                  <FormularioDemoView />
                </InfraestructureProvider>
              }
            ></Route>
            <Route
              index
              path={"/mantenimiento/demo/agregar"}
              element={
                <InfraestructureProvider>
                  <FormularioDemoView />
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
          </Route>

          <Route path="*" element={<ErrorView />}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
