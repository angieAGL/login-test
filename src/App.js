//import LoginView  from "./ui/components/autenticacion/LoginView";
import DemoGridView from "./ui/components/mantenimiento/demo/DemoGridView";

function App() {
  return (
    <DemoGridView
      buscarCabecera={true}
      buscarSingle={true}
      buscarMultiple={true}
    />
  );
}

export default App;
