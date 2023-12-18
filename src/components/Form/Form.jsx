import React, { useRef, useState, useEffect } from 'react';
import styles from './Form.module.css';
import getData from '../../pseudoApi';
import { prepareCompaniesList } from '../../utils/utils';

function Form({ setSearchResult, setCompaniesList }) {
  const refTo = useRef();
  const refFrom = useRef();
  const inputElement = useRef(null);
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const searchResult = getData(departureCity, arrivalCity, departureDate, arrivalDate);
    setSearchResult(searchResult);
    setCompaniesList(prepareCompaniesList(searchResult));
    setDepartureCity('');
    setArrivalCity('');
    setDepartureDate('');
    setArrivalDate('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        ref={inputElement}
        className={styles.input}
        type="text"
        placeholder="Откуда"
        value={departureCity}
        onChange={(e) => setDepartureCity(e.target.value)}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Куда"
        value={arrivalCity}
        onChange={(e) => setArrivalCity(e.target.value)}
      />
      <input
        ref={refTo}
        className={styles.input}
        placeholder="Когда"
        value={departureDate}
        onChange={(e) => setDepartureDate(e.target.value)}
        onFocus={() => { refTo.current.type = 'date'; }}
        onBlur={() => { refTo.current.type = 'text'; }}
      />
      <input
        ref={refFrom}
        className={styles.input}
        placeholder="Обратно"
        value={arrivalDate}
        onChange={(e) => setArrivalDate(e.target.value)}
        onFocus={() => { refFrom.current.type = 'date'; }}
        onBlur={() => { refFrom.current.type = 'text'; }}
      />
      <button className={styles.button} type="submit">Найти билеты</button>
    </form>
  );
}

export default Form;
