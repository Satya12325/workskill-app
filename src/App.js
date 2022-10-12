import './App.css';
import logo from "./assets/logo.svg"
import Firstcontainer from './components/Firstcontainer';
import Left from './components/CardSlider/Left';

function App() {
  return (
    <div className="App">
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
        <Firstcontainer/>
        <div>
          <Left/>
        </div>
    </div>
  );
}

export default App;
