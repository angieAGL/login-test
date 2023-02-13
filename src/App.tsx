import { InfraestructureProvider } from "./dependency-injection/InfraestructureInjector";
import DemoGridView from "./ui/components/mantenimiento/demo/DemoGridView";

function App() {
  return (
    // <>
    //   <DemoGridView />
    //   {/*<LoginView></LoginView>*/}
    // </>
    <InfraestructureProvider>
      <DemoGridView />
    </InfraestructureProvider>
  );
}

export default App;
