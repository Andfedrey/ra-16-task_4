import {useState} from 'react'
import {nanoid} from 'nanoid'
import {getDateFormat, sortingByDate, getCurrentDate, curDate} from '../functionDateFormat'

export default function Todo() {
  const [info, setInfo] = useState([
    {
      id: nanoid(),
      distance: '42',
      date: '12.04.12'
    },
    {
      id: nanoid(),
      distance: '22',
      date: '12.10.12'
    },
    {
      id: nanoid(),
      distance: '12',
      date: '12.01.12'
    }
  ])
  const [newStatus, setNewStatus] = useState({
    distance: 0,
    date: getCurrentDate()
  })
  const [redFlag, setRedFlag] = useState(false);
  const [redaction, setRedaction] = useState({});

  const changeHandler = (e) => {
    const {name, value } = e.target;
    console.log(Date.now())
    setNewStatus((prev) =>({...prev, [name]: value}))
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if(redFlag){
      const newInfoList = [...info];
      newInfoList[redaction.arrId] = {id: redaction.id, date: newStatus.date, distance: newStatus.distance}
      setInfo(newInfoList)
      setRedFlag(false);
    } else {
      const formatDate = getDateFormat(newStatus.date)
      const training = {
        id: nanoid(),
        date: formatDate,
        distance: newStatus.distance
      }
      setInfo((prev) => ([...prev, training]))
    }
    setNewStatus({
      distance: 0,
      date: getCurrentDate()
    })
  }

  const deleteTraining = (id) => {
    setInfo((arrInfo) => {
      return arrInfo.filter(el => el.id !== id)
    })
  }

  const editHandler = (id, date, distance, arrId) => {
    setRedFlag(true);
    setRedaction({id, date, distance, arrId});
    setNewStatus({id, date, distance})
  }
  return(
    <div className="wrapper">
      <form onSubmit={submitHandler}>
        <label htmlFor="date">Дата (ДД. ММ. ГГ)</label>
        <input name='date' id='date' type='date' placeholder='ДД.ММ.ГГ' maxLength={8} value={newStatus.date} onChange={changeHandler}></input>
        <label htmlFor="distance">Пройдено км</label>
        <input id='distance' name='distance' type='number' value={newStatus.distance} onChange={changeHandler}></input>
        <button type="submit">ok</button>
      </form>

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
    </div>
  )
}


