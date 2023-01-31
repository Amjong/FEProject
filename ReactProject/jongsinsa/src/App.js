import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { AuthContextProvider } from './context/AuthContext';
import { CartContextProvider } from './context/CartContext';
import { FirebaseContextProvider } from './context/FirebaseContext';

function App() {
  return (
    <FirebaseContextProvider>
      <AuthContextProvider>
        <CartContextProvider>
          <Header />
          <Outlet />
        </CartContextProvider>
      </AuthContextProvider>
    </FirebaseContextProvider>
  );
}

export default App;
