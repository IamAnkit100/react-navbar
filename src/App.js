import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';


function App() {
  return (
  <>
  {/* <h1>HEllo</h1> */}
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
  </>
  );
}

export default App;
