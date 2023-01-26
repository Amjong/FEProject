import React, { useState } from 'react';
import { useFirebaseApp } from '../context/FirebaseContext';

export default function Login({ setAdminState }) {
  const { firebaseApp } = useFirebaseApp();
  const [loginState, setLoginState] = useState(() => {
    return firebaseApp?.getLoginState();
  });
  const [user, setUser] = useState({});
  const handleClick = () => {
    const state = firebaseApp?.getLoginState();
    if (state) {
      firebaseApp?.logout((state) => {
        setLoginState(state);
        setAdminState(false);
      });
    } else {
      firebaseApp?.login((state, user, isAdmin) => {
        setLoginState(state);
        setUser(user);
        setAdminState(isAdmin);
      });
    }
  };
  return (
    <div className='flex'>
      {loginState ? user?.displayName : ''}
      {loginState ? <img src={user?.photoURL} alt='userPhoto' /> : ''}
      <button
        className='border-2'
        onClick={() => {
          handleClick();
        }}
      >
        {loginState ? 'LogOut' : 'Login'}
      </button>
    </div>
  );
}
