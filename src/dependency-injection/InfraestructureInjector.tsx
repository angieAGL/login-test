import React, { useState } from "react";
import { IDemoRepository } from "../aplicacion/interfaces/IDemoRepository";
import { ITipoRepository } from "../aplicacion/interfaces/ITipoRepository";
import { IUserRepository } from "../aplicacion/interfaces/IUserRepository";
import { DemoRepository } from "../infraestructura/repositorios/DemoRepository";
import { TipoRepository } from "../infraestructura/repositorios/TipoRepository";
import { UserRepository } from "../infraestructura/repositorios/UserRepository";

export class Infraestructure {
  demoRepository: IDemoRepository;
  tipoRepository: ITipoRepository;
  userRepositoy: IUserRepository;

  constructor() {
    this.demoRepository = new DemoRepository();
    this.tipoRepository = new TipoRepository();
    this.userRepositoy = new UserRepository();
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
