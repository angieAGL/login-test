import React from "react";
//import LoginView from "./ui/components/autenticacion/LoginView";
import DemoGridView from "./ui/components/mantenimiento/demo/DemoGridView";

function App() {
  return (
    <div>
    <DemoGridView
    buscarCabecera={true}
      buscarSingle={true}
      buscarMultiple={true}
    />
    {/*<LoginView></LoginView>*/}
    </div>
  );
}

export default App;
