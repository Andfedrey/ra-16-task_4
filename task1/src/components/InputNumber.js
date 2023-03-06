import React from 'react'

export default function InputNumber({bgColor, setBgColor}) {
  const changeHandler = (e) => {
    setBgColor(e.target.value.trim())
  }
  return (
    <>
      <input className="inputBlock" onChange={changeHandler} value={bgColor} name='bgColor'></input>
    </>
  )
}
