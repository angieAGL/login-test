import { InfraestructureProvider } from "./dependency-injection/InfraestructureInjector";
import DemoGridView from "./ui/components/mantenimiento/demo/DemoGridView";
import UsuarioGridView from "./ui/components/mantenimiento/usuario/UsuarioGridView";
import HomeView from "./ui/components/autenticacion/HomeView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormularioDemoView from "./ui/components/mantenimiento/demo/FormularioDemoView";
import ErrorView from "./ui/components/ErrorView";
import { RutasPrivadas } from "./ui/components/common/base/RutasPrivadas";
import LayoutView from "./ui/components/autenticacion/LayoutView";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <InfraestructureProvider>
              <HomeView />
            </InfraestructureProvider>
          }
        ></Route>

        <Route element={<RutasPrivadas />}>
          <Route
            path="/"
            element={
              <InfraestructureProvider>
                <LayoutView />
              </InfraestructureProvider>
            }
          >
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
              path={"/mantenimiento/demo/editar"}
              element={
                <InfraestructureProvider>
                  <FormularioDemoView />
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
              path="/mantenimiento/usuario"
              element={
                <InfraestructureProvider>
                  <UsuarioGridView />
                </InfraestructureProvider>
              }
            ></Route>
          </Route>
        </Route>

        <Route path="*" element={<ErrorView />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
