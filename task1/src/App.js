import './App.css';
import {useState} from 'react';
import InputNumber from './components/InputNumber';
import ResultColor from './components/ResultColor';

function App() {
  const [bgColor, setBgColor] = useState('')
  const [color, setColor] = useState('')

  return (
    <>
    <div className='App' style={{ backgroundColor: `${color}` }}>
      <div className="block">
        <form className="formBlock" >
          <InputNumber bgColor={bgColor} setBgColor={setBgColor}></InputNumber>
          <ResultColor bgColor={bgColor} color={color} setColor={setColor}></ResultColor>
        </form>
      </div>
    </div>
    </>
  );
}

export default App;
