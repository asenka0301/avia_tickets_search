import React from 'react';
import styles from './Filters.module.css';

function Sortings({
  sortBy,
  setSortBy,
}) {
  // const [priceLowerBoundValue, setPriceLowerBoundValue] = useState('');
  // const [priceUpperBoundValue, setPriceUpperBoundValue] = useState('');
  // const handlePriceLowerBound = (event) => {
  //   setPriceLowerBoundValue(Number(event.target.value));
  //   setPriceLowerBound(Number(event.target.value));
  // };
  // const handlePriceUpperBound = (event) => {
  //   setPriceUpperBoundValue(Number(event.target.value));
  //   setPriceUpperBound(Number(event.target.value));
  // };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  // const handleStopsFilterChange = (event) => {
  //   const newStops = { ...stops };
  //   newStops[event.target.value] = !newStops[event.target.value];
  //   setStops(newStops);
  // };
  // const handleCompanyFiltersSet = (event) => {
  //   const newFilterValue = event.target.value;
  //   if (!companiesFilter.includes(newFilterValue)) {
  //     setCompaniesFilter([...companiesFilter, newFilterValue]);
  //   } else {
  //     const newSelectedCompanies = companiesFilter
  // .filter((company) => company !== newFilterValue);
  //     setCompaniesFilter(newSelectedCompanies);
  //   }
  // };
  return (
    <div className={styles.sorting}>
      <h3 className={styles.title}>Сортировать</h3>
      <label htmlFor="priceUp" className={styles.label}>
        <input
          type="radio"
          value="priceUp"
          checked={sortBy === 'priceUp'}
          onChange={handleSortChange}
          id="priceUp"
        />
        - По возрастанию цены
      </label>
      <label htmlFor="priceDown" className={styles.label}>
        <input
          type="radio"
          value="priceDown"
          checked={sortBy === 'priceDown'}
          onChange={handleSortChange}
          id="priceDown"
        />
        - По убыванию цены
      </label>
      <label htmlFor="duration" className={styles.label}>
        <input
          type="radio"
          value="duration"
          checked={sortBy === 'duration'}
          onChange={handleSortChange}
          id="duration"
        />
        - По времени в пути
      </label>
      {/* <div className="filtering">
        <label htmlFor="0">
          <input
            type="checkbox"
            value="withoutStops"
            checked={stops.withoutStops}
            onChange={handleStopsFilterChange}
            id="0"
          />
          без пересадок
        </label>
        <label htmlFor="1">
          <input
            type="checkbox"
            value="oneStop"
            checked={stops.oneStop}
            onChange={handleStopsFilterChange}
            id="1"
          />
          1 пересадка
        </label>
      </div> */}
      {/* <div className="price-filter">
        <label htmlFor="priceLowerBound">
          От
          <input
            type="number"
            value={priceLowerBoundValue}
            onChange={handlePriceLowerBound}
            id="priceLowerBound"
          />
        </label>
        <label htmlFor="priceUpperBound">
          До
          <input
            type="number"
            value={priceUpperBoundValue}
            onChange={handlePriceUpperBound}
            id="priceUpperBound"
          />
        </label>
      </div> */}
      {/* <div className="companies">
        {Object.entries(companiesList).map(([company, price]) => (
          <label htmlFor={company}>
            <input
              type="checkbox"
              value={company}
              checked={companiesFilter.includes(company)}
              onChange={handleCompanyFiltersSet}
              id={company}
            />
            { ` - ${company} от ${price} р.` }
          </label>
        ))}
      </div> */}
    </div>
  );
}

export default Sortings;
