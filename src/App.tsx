import { InfraestructureProvider } from "./dependency-injection/InfraestructureInjector";
import DemoGridView from "./ui/components/mantenimiento/demo/DemoGridView";

function App() {
  return (
    // <>
    //   <DemoGridView />
    //   {/*<LoginView></LoginView>*/}
    // </>
    <InfraestructureProvider>
      <DemoGridView
        buscarCabecera={true}
        buscarSingle={true}
        buscarMultiple={true}
      />
    </InfraestructureProvider>
  );
}

export default App;
