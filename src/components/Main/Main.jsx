import React, { useState } from 'react';
import _ from 'lodash';
import styles from './Main.module.css';
import {
  sortLogic,
  stopsFilter,
  filterCompanies,
  filterPrice,
} from '../../utils/utils';
import Sorting from '../Filters/Sorting';
import Filtering from '../Filters/Filtering';
import PriceFiltering from '../Filters/PriceFiltering';
import CompaniesFiltering from '../Filters/CompaniesFiltering';
import Card from '../Card/Card';

function Main({ searchResult, companiesList }) {
  const [limit, setLimit] = useState(3);
  const [sortBy, setSortBy] = useState('priceUp');
  const [stops, setStops] = useState({
    withoutStops: false,
    oneStop: false,
  });
  const [priceLowerBound, setPriceLowerBound] = useState(0);
  const [priceUpperBound, setPriceUpperBound] = useState(Infinity);
  const [companiesFilter, setCompaniesFilter] = useState([]);
  const handleClick = () => {
    setLimit(limit + 2);
  };

  const flightsToDisplay = searchResult
    .sort((a, b) => sortLogic(a, b, sortBy))
    .filter(({ flight }) => stopsFilter(flight, stops))
    .filter(({ flight }) => filterCompanies(flight, companiesFilter))
    .filter(({ flight }) => filterPrice(flight, priceLowerBound, priceUpperBound));

  return (
    <main className={`${styles.main} wrapper`}>
      {searchResult.length === 0 && <div className="message">Полеты не найдены</div>}
      {searchResult.length !== 0
      && (
        <>
          <div className={styles.filters}>
            <Sorting sortBy={sortBy} setSortBy={setSortBy} />
            <Filtering stops={stops} setStops={setStops} />
            <PriceFiltering
              setPriceLowerBound={setPriceLowerBound}
              setPriceUpperBound={setPriceUpperBound}
            />
            <CompaniesFiltering
              companiesList={companiesList}
              companiesFilter={companiesFilter}
              setCompaniesFilter={setCompaniesFilter}
            />
          </div>
          <div className={styles['fligths-container']}>
            {
              flightsToDisplay
                .slice(0, limit)
                .map(({ flight }) => <Card flight={flight} key={_.uniqueId('fc')} />)
              }
            {(flightsToDisplay.length !== 0 && limit < flightsToDisplay.length)
            && <button type="button" className={styles.button} onClick={handleClick}>Показать еще</button>}
          </div>
        </>
      )}
    </main>
  );
}

export default Main;
