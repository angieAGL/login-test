import { useContext } from "react";
import {
  Infraestructure,
  InfraestructureContext,
} from "../../../../dependency-injection/InfraestructureInjector";

export function useInfraestructureRepository(): Infraestructure {
  const context = useContext(InfraestructureContext);
  if (!context) {
    throw new Error("Service must be used within a ServiceProvider");
  }
  return context;
}
