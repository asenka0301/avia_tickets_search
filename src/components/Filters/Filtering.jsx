import React from 'react';
import styles from './Filters.module.css';

function Filtering({ stops, setStops }) {
  const handleStopsFilterChange = (event) => {
    const newStops = { ...stops };
    newStops[event.target.value] = !newStops[event.target.value];
    setStops(newStops);
  };
  return (
    <div className={styles.filtering}>
      <h3 className={styles.title}>Фильтровать</h3>
      <label htmlFor="0" className={styles.label}>
        <input
          type="checkbox"
          value="withoutStops"
          checked={stops.withoutStops}
          onChange={handleStopsFilterChange}
          id="0"
        />
        - без пересадок
      </label>
      <label htmlFor="1" className={styles.label}>
        <input
          type="checkbox"
          value="oneStop"
          checked={stops.oneStop}
          onChange={handleStopsFilterChange}
          id="1"
        />
        - 1 пересадка
      </label>
    </div>
  );
}

export default Filtering;
