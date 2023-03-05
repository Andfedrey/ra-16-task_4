import './App.css';
import {useState} from 'react';

function App() {
  const [bgColor, setBgColor] = useState('')
  const submitHandler = () => {}
  const changeHandler = (e) => {
    setBgColor(e.target.value.trim())
  }
  function checkColor() {
    let hex = bgColor;
    if(hex.length > 6) {
      if(hex[0] !== '#') return 'ERROR'
      hex = hex.replace('#', '');
      const hexDigits = '0123456789ABCDEF';
      const validHex = hex.split('').every((char) => hexDigits.includes(char.toUpperCase()));
      if (!validHex) {
        return 'ERROR' ;
      }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgb(${r},${g},${b})`}
  }
  return (
    <div className='App' style={{ backgroundColor: `${checkColor()}` }}>
      <div className="block">
        <form className="formBlock" onSubmit={submitHandler}>
          <input className="inputBlock" onChange={changeHandler} value={bgColor} name='bgColor'></input>
          <label className="infoBlock">{checkColor()}</label>
        </form>
      </div>
    </div>
  );
}

export default App;
