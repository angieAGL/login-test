import { InfraestructureProvider } from "./dependency-injection/InfraestructureInjector";
import DemoGridView from "./ui/components/mantenimiento/demo/DemoGridView";
import UsuarioGridView from "./ui/components/mantenimiento/usuario/UsuarioGridView";
import LoginView from "./ui/components/autenticacion/LoginView";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
          path="/demo"
          element={
            <InfraestructureProvider>
              <DemoGridView />
            </InfraestructureProvider>
          }
        ></Route>
        <Route
          path="/users"
          element={
            <InfraestructureProvider>
              <UsuarioGridView />
            </InfraestructureProvider>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
