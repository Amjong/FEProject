import React from 'react';
import { useLoginClient } from '../context/LoginContext';

export default function Login() {
  const { client } = useLoginClient();
  console.log(client);
  const loginState = client?.getLoginState();
  const loginAPI = () => {
    client?.login();
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
