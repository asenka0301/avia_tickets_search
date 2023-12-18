import React, { useState } from 'react';
import styles from './Filters.module.css';

function PriceFiltering({ setPriceLowerBound, setPriceUpperBound }) {
  const [priceLowerBoundValue, setPriceLowerBoundValue] = useState('');
  const [priceUpperBoundValue, setPriceUpperBoundValue] = useState('');
  const handlePriceLowerBound = (event) => {
    setPriceLowerBoundValue(Number(event.target.value));
    setPriceLowerBound(Number(event.target.value));
  };
  const handlePriceUpperBound = (event) => {
    setPriceUpperBoundValue(Number(event.target.value));
    setPriceUpperBound(Number(event.target.value));
  };
  return (
    <div className={styles['price-filtering']}>
      <h3 className={styles.title}>Цена</h3>
      <label htmlFor="priceLowerBound" className={styles.label}>
        От
        <input
          type="number"
          value={priceLowerBoundValue}
          onChange={handlePriceLowerBound}
          id="priceLowerBound"
          placeholder="0"
        />
      </label>
      <label htmlFor="priceUpperBound" className={styles.label}>
        До
        <input
          type="number"
          value={priceUpperBoundValue}
          onChange={handlePriceUpperBound}
          id="priceUpperBound"
          placeholder="10000"
        />
      </label>
    </div>
  );
}

export default PriceFiltering;
