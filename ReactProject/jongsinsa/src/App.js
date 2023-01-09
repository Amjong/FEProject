import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { LoginContextProvider } from './context/LoginContext';

function App() {
  return (
    <LoginContextProvider>
      <Header />
      <Outlet />
    </LoginContextProvider>
  );
}

export default App;
