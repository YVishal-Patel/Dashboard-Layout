import './App.css';
import { MainComponent } from './Components/MainComponent';
import { Navbar } from './Components/Navbar';
import { Sidebar } from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='main_comp'>
      <Navbar />
      <MainComponent />
      </div>
    </div>
  );
}

export default App;
