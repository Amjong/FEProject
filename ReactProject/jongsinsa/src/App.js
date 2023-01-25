import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { CartContextProvider } from './context/CartContext';
import { FirebaseContextProvider } from './context/FirebaseContext';

function App() {
  return (
    <FirebaseContextProvider>
      <CartContextProvider>
        <Header />
        <Outlet />
      </CartContextProvider>
    </FirebaseContextProvider>
  );
}

export default App;
