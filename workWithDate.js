function checkMonth(m) {
  switch (m) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
  }
}

function checkDay(d) {
  switch (d) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
}
function timeAndDate(date) {
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const dates = date.getDay();
  const month = date.getMonth();
  const days = date.getDate();
  return `${days} ${checkMonth(month)}, ${checkDay(
    dates
  )} ${hours}:${minutes} `;
}

function getData(e) {
  e = e * 1000;
  const hours = new Date(e).getHours();
  const min = "0" + new Date(e).getMinutes();
  return `${hours}:${min.substr(-2)}`; //substr???
}
export { timeAndDate, getData };
