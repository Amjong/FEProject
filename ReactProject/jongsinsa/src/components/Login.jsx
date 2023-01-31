import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useFirebaseApp } from '../context/FirebaseContext';
import Button from './ui/Button';

export default function Login() {
  const { firebaseApp } = useFirebaseApp();
  const { user, setUser } = useAuth();
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
      {user && <Button text={'Logout'} onClick={handleLogout}></Button>}
      {!user && <Button text={'Login'} onClick={handleLogin}></Button>}
    </div>
  );
}
