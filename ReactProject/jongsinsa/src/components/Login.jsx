import React, { useState } from 'react';
import { useFirebaseApp } from '../context/FirebaseContext';

export default function Login() {
  const { firebaseApp } = useFirebaseApp();
  const [loginState, setLoginState] = useState(() => {
    return firebaseApp?.getLoginState();
  });
  const [user, setUser] = useState({});
  const loginAPI = () => {
    firebaseApp?.login((state, user) => {
      setLoginState(state);
      setUser(user);
    });
  };
  return (
    <div className='flex'>
      {loginState ? user?.displayName : ''}
      {loginState ? <img src={user?.photoURL} alt='userPhoto' /> : ''}
      <button
        className='border-2'
        onClick={() => {
          loginAPI();
        }}
      >
        {loginState ? 'LogOut' : 'Login'}
      </button>
    </div>
  );
}
