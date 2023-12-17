import data from './flights.json';

function getData(departureCity, arrivalCity, toDate, fromDate) {
  const queryResult = data;
  const sample = queryResult.result.flights;
  const res = sample.filter((element) => {
    const forwardSegs = element.flight.legs[0].segments;
    const backwardSegs = element.flight.legs[1].segments;

    let flightTo = false;
    let flightFrom = false;

    const flightToDepartureDate = forwardSegs[0].departureDate;

    let flightToDerpartureCity = '';
    if (forwardSegs[0].departureCity) {
      flightToDerpartureCity = forwardSegs[0].departureCity.caption;
    }

    let flightToArrivalCity = '';
    if (forwardSegs[forwardSegs.length - 1].arrivalCity) {
      flightToArrivalCity = forwardSegs[forwardSegs.length - 1].arrivalCity.caption;
    }

    if (
      (flightToDerpartureCity.toLowerCase() === departureCity.toLowerCase())
      && flightToDepartureDate.startsWith(toDate)
      && (flightToArrivalCity.toLowerCase() === arrivalCity.toLowerCase())
    ) {
      flightTo = true;
    }

    const flightFromDepartureDate = backwardSegs[0].departureDate;

    let flightFromDerpartureCity = '';
    if (backwardSegs[0].departureCity) {
      flightFromDerpartureCity = backwardSegs[0].departureCity.caption;
    }

    let flightFromArrivalCity = '';
    if (backwardSegs[backwardSegs.length - 1].arrivalCity) {
      flightFromArrivalCity = backwardSegs[backwardSegs.length - 1].arrivalCity.caption;
    }

    if (
      (flightFromDerpartureCity.toLowerCase() === arrivalCity.toLowerCase())
      && flightFromDepartureDate.startsWith(fromDate)
      && (flightFromArrivalCity.toLowerCase() === departureCity.toLowerCase())
    ) {
      flightFrom = true;
    }

    return flightTo && flightFrom;
  });
  return res;
}

export default getData;
