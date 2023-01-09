import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { FirebaseContextProvider } from './context/FirebaseContext';

function App() {
  return (
    <FirebaseContextProvider>
      <Header />
      <Outlet />
    </FirebaseContextProvider>
  );
}

export default App;
