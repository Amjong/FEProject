import React from 'react';
import { createContext, useContext } from 'react';
import LoginClient from '../api/loginClient';

export const LoginContext = createContext();
const client = new LoginClient();

export function LoginContextProvider({ children }) {
  return (
    <LoginContext.Provider value={{ client }}>{children}</LoginContext.Provider>
  );
}

export function useLoginClient() {
  const value = useContext(LoginContext);
  if (value === undefined) {
    throw new Error(
      'useLoginClient should be used within LoginContextProvider'
    );
  }
  return value;
}
