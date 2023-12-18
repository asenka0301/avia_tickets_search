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

function sortLogic(a, b, sortBy) {
  if (sortBy === 'priceDown') {
    return b.flight.price.total.amount - a.flight.price.total.amount;
  }
  if (sortBy === 'duration') {
    return (
      (a.flight.legs[0].duration + a.flight.legs[1].duration)
      - (b.flight.legs[0].duration + b.flight.legs[1].duration)
    );
  }
  return a.flight.price.total.amount - b.flight.price.total.amount;
}

function stopsFilter(flight, stops) {
  const noStops = (
    flight.legs[0].segments.length === 1
    && flight.legs[1].segments.length === 1
  );
  const oneStop = (
    flight.legs[0].segments.length === 2
    || flight.legs[1].segments.length === 2
  );
  if (stops.withoutStops && !stops.oneStop) return noStops;
  if (!stops.withoutStops && stops.oneStop) return oneStop;
  if (stops.withoutStops && stops.oneStop) return noStops || oneStop;
  return true;
}

function filterCompanies(flight, filters) {
  if (filters.length !== 0) {
    return filters.includes(flight.carrier.caption);
  }
  return true;
}

function filterPrice(flight, lowerBoundary, upperBoundary) {
  if (lowerBoundary === 0 && upperBoundary === 0) return true;

  const flightPrice = flight.price.total.amount;
  if (lowerBoundary <= flightPrice && flightPrice <= upperBoundary) {
    return true;
  }
  return false;
}

export {
  getTime,
  getDate,
  getMinutesAndHours,
  countTransfers,
  prepareCompaniesList,
  sortLogic,
  stopsFilter,
  filterCompanies,
  filterPrice,
};
