import './App.css';
import VideoList from './component/VideoList';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <VideoList></VideoList>
    </div>
  );
}

export default App;
