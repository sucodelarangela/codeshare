import { createContext, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children, value }) {
  // value recebe o usuário logado
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthValue() {
  return useContext(AuthContext);
}