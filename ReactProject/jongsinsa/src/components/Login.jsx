import React from 'react';
import { useFirebaseApp } from '../context/FirebaseContext';

export default function Login() {
  const { firebaseApp } = useFirebaseApp();
  console.log(firebaseApp);
  const loginState = firebaseApp?.getLoginState();
  const loginAPI = () => {
    firebaseApp?.login();
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
