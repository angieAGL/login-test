import React, { useState } from "react";
import { IDemoRepository } from "../aplicacion/interfaces/IDemoRepository";
import { ITipoRepository } from "../aplicacion/interfaces/ITipoRepository";
import { IUsuarioRepository } from "../aplicacion/interfaces/IUsuarioRepository";
import { DemoRepository } from "../infraestructura/repositorios/DemoRepository";
import { TipoRepository } from "../infraestructura/repositorios/TipoRepository";
import { UsuarioRepository } from "../infraestructura/repositorios/UsuarioRepository";

export class Infraestructure {
  demoRepository: IDemoRepository;
  tipoRepository: ITipoRepository;
  usuarioRepositoy: IUsuarioRepository;

  constructor() {
    this.demoRepository = new DemoRepository();
    this.tipoRepository = new TipoRepository();
    this.usuarioRepositoy = new UsuarioRepository();
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
