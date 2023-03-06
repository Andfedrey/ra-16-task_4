import { nanoid } from 'nanoid';
import React from 'react'
import { getCurrentDate, getDateFormat, searchDate } from '../functionDateFormat'

export default function InputInfo({info, setInfo, redFlag, setRedFlag, redaction, newStatus, setNewStatus}) {
  const changeHandler = (e) => {
    const {name, value } = e.target;
    setNewStatus((prev) =>({...prev, [name]: value}))
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const formatDate = getDateFormat(newStatus.date)
    const newInfoList = [...info];
    if(redFlag){
      newInfoList[redaction.arrId] = {id: redaction.id, date: formatDate, distance: newStatus.distance}
      setInfo(newInfoList)
      setRedFlag(false);
    } else {
      const training = {
        id: nanoid(),
        date: formatDate,
        distance: Number(newStatus.distance)
      }
      const checkForDateIndex = searchDate(newInfoList, training)
      if(checkForDateIndex > -1){
        let newDistance = newInfoList[checkForDateIndex].distance + training.distance
        newInfoList[checkForDateIndex] = {id: redaction.id, date: formatDate, distance: newDistance};
        setInfo(newInfoList)
      }else {
        setInfo((prev) => ([...prev, training]))
      }
    }
    setNewStatus({distance: 0, date: getCurrentDate()})
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="date">Дата (ДД. ММ. ГГ)</label>
        <input name='date' id='date' type='date' placeholder='ДД.ММ.ГГ' maxLength={8} value={newStatus.date} onChange={changeHandler} ></input>
        <label htmlFor="distance">Пройдено км</label>
        <input id='distance' name='distance' type='number' value={newStatus.distance} onChange={changeHandler}></input>
        <button type="submit">ok</button>
      </form>
    </div>
  )
}
