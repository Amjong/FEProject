import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Root from './pages/Root';
import Search from './pages/Search';
import Watch from './pages/Watch';

const router = createBrowserRouter([
  {
    basename: '/JongTube',
    path: '/JongTube',
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/JongTube/search/:keyword',
        element: <Search></Search>,
      },
      {
        path: '/JongTube/watch/:videoID',
        element: <Watch></Watch>,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
