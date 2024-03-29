import React from 'react';
import { createContext, useContext } from 'react';
import FirebaseApp from '../api/firebaseApp';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const FirebaseContext = createContext();
const firebaseApp = new FirebaseApp(
  firebaseConfig,
  process.env.REACT_APP_FIREBASE_ADMIN_USER_ID
);

export function FirebaseContextProvider({ children }) {
  return (
    <FirebaseContext.Provider value={{ firebaseApp }}>
      {children}
    </FirebaseContext.Provider>
  );
}

export function useFirebaseApp() {
  const value = useContext(FirebaseContext);
  if (value === undefined) {
    throw new Error(
      'useFirebaseApp should be used within FirebaseContextProvider'
    );
  }
  return value;
}
