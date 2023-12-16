import data from './flight.json';

// const departureCity = 'москва';
// const arrivalCity = 'лондон';
// const departureDate = '2020-08-18';
// const arrivalDate = '2020-08-19';

function getData(departureCity, arrivalCity, departureDate, arrivalDate) {
  const queryResult = data;
  const sample = queryResult.result.flights;
  const res = sample.filter((element) => {
    const forwardSegs = element.flight.legs[0].segments;
    const backwardSegs = element.flight.legs[1].segments;
    let flightTo = false;
    let flightFrom = false;
    console.log(forwardSegs);
    console.log(backwardSegs);

    if (forwardSegs.length === 1) {
      if (forwardSegs[0].departureCity.caption.toLowerCase() === departureCity.toLowerCase()
      && forwardSegs[0].departureDate.startsWith(departureDate)
      && (forwardSegs[0].arrivalCity.caption.toLowerCase() === arrivalCity.toLowerCase())) {
        flightTo = true;
      }
    }
    if (forwardSegs.length > 1) {
      if (forwardSegs[0].departureCity.caption.toLowerCase() === departureCity.toLowerCase()
      && forwardSegs[0].departureDate.startsWith(departureDate)
      && forwardSegs[1].arrivalAirport.caption.toLowerCase().includes(arrivalCity.toLowerCase())) {
        flightTo = true;
      }
    }
    if (backwardSegs.length === 1) {
      console.log(backwardSegs[0].departureCity.caption.toLowerCase(), arrivalCity.toLowerCase());
      if (backwardSegs[0].departureCity.caption.toLowerCase() === arrivalCity.toLowerCase()
      && backwardSegs[0].departureDate.startsWith(arrivalDate)
      && backwardSegs[0].arrivalCity.caption.toLowerCase() === departureCity.toLowerCase()) {
        flightFrom = true;
      }
    }
    if (backwardSegs.length > 1) {
      (console.log(backwardSegs[1].arrivalCity.caption.toLowerCase(), 'here'));
      if (backwardSegs[0].departureAirport.caption.toLowerCase().includes(arrivalCity.toLowerCase())
      && backwardSegs[0].departureDate.startsWith(arrivalDate)
      && backwardSegs[1].arrivalCity.caption.toLowerCase() === departureCity.toLowerCase()) {
        flightFrom = true;
      }
    }
    return flightTo && flightFrom;
  });
  return res;
}

export default getData;
