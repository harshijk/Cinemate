import './App.css';
import { Header , Footer  } from './components';
import { Allrouter } from './routes/Allrouter';

function App() {
  return (
    <div className='dark:bg-Gray'>
      <Header />
      <Allrouter/>
      <Footer/>
      </div>
  );
}

export default App;
