function getTime(data) {
  const date = new Date(data);
  const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  return time;
}

function getDate(data) {
  const date = new Date(data);
  const options = { day: 'numeric', month: 'short', weekday: 'short' };
  const dateFormat = new Intl.DateTimeFormat('ru-RU', options);
  const parts = dateFormat.formatToParts(date);
  const formattedDate = `${parts[2].value} ${parts[4].value} ${parts[0].value}`;
  return formattedDate;
}

function getMinutesAndHours(min) {
  const hours = Math.floor(min / 60);
  const remainingMinutes = min % 60;
  return `${hours} ч ${remainingMinutes} мин`;
}

function countTransfers(length) {
  if (length === 1) {
    return null;
  }
  return length - 1;
}

function prepareCompaniesList(flights) {
  const companiesList = {};
  for (let i = 0; i < flights.length; i += 1) {
    const companyName = flights[i].flight.carrier.caption;
    const price = flights[i].flight.price.total.amount;
    if (companiesList[companyName]) {
      companiesList[companyName] = Math.min(companiesList[companyName], price);
    } else {
      companiesList[companyName] = price;
    }
  }
  return companiesList;
}

export {
  getTime,
  getDate,
  getMinutesAndHours,
  countTransfers,
  prepareCompaniesList,
};
