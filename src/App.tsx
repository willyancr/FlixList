import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='flex'>
      <SideBar />
      <Header />
    </div>
  );
}

export default App;
