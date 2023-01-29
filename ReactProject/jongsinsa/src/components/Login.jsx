import React, { useState } from 'react';
import { useFirebaseApp } from '../context/FirebaseContext';

export default function Login({ setAdminState }) {
  const { firebaseApp } = useFirebaseApp();
  const [user, setUser] = useState();
  const handleLogout = () => {
    firebaseApp?.logout().then(setUser);
  };
  const handleLogin = () => {
    firebaseApp?.login().then((user) => {
      console.log(user);
      setUser(user);
    });
  };
  return (
    <div className='flex'>
      {user && <span>{user.displayName}</span>}
      {user && <img src={user.photoURL} alt='userPhoto' />}
      {user && (
        <button className='border-2' onClick={handleLogout}>
          Logout
        </button>
      )}
      {!user && (
        <button className='border-2' onClick={handleLogin}>
          Login
        </button>
      )}
    </div>
  );
}
