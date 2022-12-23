import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Root from './pages/Root';
import Search from './pages/Search';
import Watch from './pages/Watch';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/search/:keyword',
        element: <Search></Search>,
      },
      {
        path: '/watch/:videoID',
        element: <Watch></Watch>,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
