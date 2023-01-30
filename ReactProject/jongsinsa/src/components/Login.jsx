import React, { useEffect } from 'react';
import { useFirebaseApp } from '../context/FirebaseContext';

export default function Login({ user, setUser }) {
  const { firebaseApp } = useFirebaseApp();
  const handleLogout = () => {
    firebaseApp?.logout().then(setUser);
  };
  const handleLogin = () => {
    firebaseApp?.login().then((user) => {
      console.log(user);
      setUser(user);
    });
  };
  useEffect(() => {
    firebaseApp?.onUserStateChange(setUser);
  }, []);
  return (
    <div className='flex'>
      {user && (
        <img
          className='w-10 h-10 rounded-full mr-2'
          src={user.photoURL}
          alt='userPhoto'
        />
      )}
      {user && <span className='hidden md:block'>{user.displayName}</span>}
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
