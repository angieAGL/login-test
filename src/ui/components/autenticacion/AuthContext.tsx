import React, { useState } from "react";

interface authContext {
  loggeado: boolean;
  setLoggeado: (loggeado: boolean) => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}
export const AuthContext = React.createContext<authContext>({
  loggeado: false,
  setLoggeado: (loggeado) => console.log("exito"),
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [loggeado, setLoggeado] = useState(false);

  return (
    <AuthContext.Provider value={{ loggeado, setLoggeado }}>
      {children}
    </AuthContext.Provider>
  );
};
