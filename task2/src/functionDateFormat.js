export function getDateFormat(date){
  if (!date) return '';
  const [year, month, day] = date.split('-');
  return `${day}.${month}.${year.slice(2)}`;
}

export function formatedDate(date){
  const [day, month, year] = date.split('.');
  return `20${year}-${month}-${day}`
}

export function sortingByDate(arrlist) {
  return arrlist.sort((a,b) => new Date(a.date) - new Date(b.date))
}

export function getCurrentDate() {
  const d = new Date(Date.now());
  const day = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth()+1).toString().padStart(2, '0')
  const year = d.getFullYear().toString().slice(0, 4)

  return `${year}-${month}-${day}`;
}

export function searchDate(arrlist, training){
  return arrlist.findIndex((el) => el.date === training.date)
}
