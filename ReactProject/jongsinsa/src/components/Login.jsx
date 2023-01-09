import React from 'react';
import { useLoginClient } from '../context/LoginContext';

export default function Login() {
  const { loginClient } = useLoginClient();
  const loginState = loginClient?.getLoginState();
  const loginAPI = () => {
    loginClient?.login();
  };
  return (
    <div>
      <button
        onClick={() => {
          loginAPI();
        }}
      >
        {loginState && loginState ? 'LogOut' : 'Login'}
      </button>
    </div>
  );
}
