import React from 'react'
import { formatedDate, sortingByDate } from '../functionDateFormat'

export default function ResultInfo({info,setInfo,setRedFlag,setRedaction,setNewStatus }) {

  const deleteTraining = (id) => {
    setInfo((arrInfo) => {
      return arrInfo.filter(el => el.id !== id)
    })
  }
  const editHandler = (id, date, distance, arrId) => {
    const d = formatedDate(date);
    setRedFlag(true);
    setRedaction({id, date, distance, arrId});
    setNewStatus({id, date: d, distance})
  }
  return (
    <div>
      <h1>info</h1>
      <table className='table-wrp'>
        <th>Дата(ДД.ММ.ГГ)</th>
        <th>Пройдено км</th>
        <th>Действия</th>
      <tbody>
        {sortingByDate(info).map((day, arrId) => 
          <tr key={day.id}>
            <td>{day.date}</td>
            <td>{day.distance}</td>
            <td>
              <button onClick={() => deleteTraining(day.id)}>dell</button>
              <button onClick={() => editHandler(day.id, day.date, day.distance, arrId)}>edit</button>
            </td>
          </tr>
        )}
      </tbody>
      </table>
    </div>
  )
}
