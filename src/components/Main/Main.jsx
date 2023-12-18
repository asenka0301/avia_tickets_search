import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Filters from '../Filters/Filters';
import Card from '../Card/Card';

function Main({ searchResult, companiesList }) {
  const [sortBy, setSortBy] = useState('priceUp');
  const [stops, setStops] = useState({
    withoutStops: false,
    oneStop: false,
  });
  const [priceLowerBound, setPriceLowerBound] = useState(0);
  const [priceUpperBound, setPriceUpperBound] = useState(Infinity);
  const [companiesFilter, setCompaniesFilter] = useState([]);
  return (
    <main className="wrapper main">
      {searchResult.length > 0 && (
        <Filters
          sortBy={sortBy}
          setSortBy={setSortBy}
          stops={stops}
          setStops={setStops}
          companiesList={companiesList}
          companiesFilter={companiesFilter}
          setCompaniesFilter={setCompaniesFilter}
          setPriceLowerBound={setPriceLowerBound}
          setPriceUpperBound={setPriceUpperBound}
        />
      )}
      <div className="fligths-container">
        {searchResult.length === 0 && <div>Полеты не найдены</div>}
        {
          searchResult.sort((a, b) => {
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
          })
            .filter(({ flight }) => {
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
            })
            .filter(({ flight }) => {
              if (companiesFilter.length !== 0) {
                return companiesFilter.includes(flight.carrier.caption);
              }
              return true;
            }).filter(({ flight }) => {
              const flightPrice = flight.price.total.amount;
              if (priceLowerBound <= flightPrice && flightPrice <= priceUpperBound) {
                return true;
              }
              return false;
            })
            .map(({ flight }) => <Card flight={flight} key={uuidv4()} />)
          }
      </div>
    </main>
  );
}

export default Main;
