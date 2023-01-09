import React, { useState } from 'react';
import { useFirebaseApp } from '../context/FirebaseContext';

export default function Login() {
  const { firebaseApp } = useFirebaseApp();
  const [loginState, setLoginState] = useState(() => {
    return firebaseApp?.getLoginState();
  });
  const loginAPI = () => {
    firebaseApp?.login((state) => {
      setLoginState(state);
    });
  };
  return (
    <div>
      <button
        onClick={() => {
          loginAPI();
        }}
      >
        {loginState ? 'LogOut' : 'Login'}
      </button>
    </div>
  );
}
