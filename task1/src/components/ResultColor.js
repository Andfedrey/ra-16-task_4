import React from 'react'

export default function ResultColor({bgColor, setColor}) {

  function checkColor() {
    let hex = bgColor;
    if(hex[0] !== '#' || hex.length > 7) return 'ERROR'
    if(hex.length > 6) {
      hex = hex.replace('#', '');
      const hexDigits = '0123456789ABCDEF';
      const validHex = hex.split('').every((char) => hexDigits.includes(char.toUpperCase()));
      if (!validHex) {
        return 'ERROR' ;
      }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    setColor(`rgb(${r},${g},${b})`)
    return `rgb(${r},${g},${b})`}
  }

  return (
    <>
      <label className="infoBlock">{checkColor()}</label>
    </>
  )
}
