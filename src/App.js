import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <div>
      <Navbar title = "Text Analyzer" />
      <div className='container'>
        <TextForm heading = "Enter Your Text" /> 
      </div>
    </div>
  );
}

export default App;
