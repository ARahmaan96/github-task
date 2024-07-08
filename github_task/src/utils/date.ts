const formatDate = (date: Date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ][date.getMonth()];
  let year = date.getFullYear().toString();
  if (year.charAt(0) === '2') {
    year = year.slice(-2);
  }

  return `${day} ${month} ${year}`;
};

export default formatDate;
