import React, { useState } from "react";
import { IDemoRepository } from "../aplicacion/interfaces/IDemoRepository";
import { ITipoRepository } from "../aplicacion/interfaces/ITipoRepository";
import { DemoRepository } from "../infractutura/repositorios/DemoRepository";
import { TipoRepository } from "../infractutura/repositorios/TipoRepository";

export class Infraestructure {
  demoRepository: IDemoRepository;
  tipoRepository: ITipoRepository;

  constructor() {
    this.demoRepository = new DemoRepository();
    this.tipoRepository = new TipoRepository();
  }
}

export const InfraestructureContext =
  React.createContext<Infraestructure | null>(null);

interface InfraestructureProviderProps {
  children: React.ReactNode;
}

export const InfraestructureProvider: React.FC<
  InfraestructureProviderProps
> = ({ children }) => {
  const [infraestructure] = useState(new Infraestructure());
  return (
    <InfraestructureContext.Provider value={infraestructure}>
      {children}
    </InfraestructureContext.Provider>
  );
};
