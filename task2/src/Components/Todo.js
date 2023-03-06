import {useState} from 'react'
import {nanoid} from 'nanoid'
import {getDateFormat, sortingByDate, getCurrentDate, formatedDate, searchDate} from '../functionDateFormat'
import InputInfo from './InputInfo'
import ResultInfo from './ResultInfo'

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

  return(
    <div className="wrapper">
      <InputInfo info={info} setInfo={setInfo} redFlag={redFlag} setRedFlag={setRedFlag} redaction={redaction} newStatus={newStatus} setNewStatus={setNewStatus}></InputInfo>
      <ResultInfo info={info} setInfo={setInfo} setRedFlag={setRedFlag} setRedaction={setRedaction} setNewStatus={setNewStatus}></ResultInfo>
    </div>
  )
}


