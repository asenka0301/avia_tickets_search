import React from 'react';
import styles from './Card.module.css';
import Direction from '../Direction/Direction';

function Card({ flight }) {
  const { carrier, price, legs } = flight;
  const [routeTo, routeFrom] = legs;
  return (
    <div className={styles.flight}>
      <header className={styles.header}>
        <div>{carrier.caption}</div>
        <div className={styles.price}>
          <div className={styles.total}>{`${price.total.amount} \u20BD`}</div>
          <span className={styles.text}>Стоимость для одного взрослого пассажира</span>
        </div>
      </header>
      <div className={styles.destinations}>
        <Direction route={routeTo} carrier={carrier} />
        <hr className={styles.thick} />
        <Direction route={routeFrom} carrier={carrier} />
      </div>
      <button className={styles.button} type="button">Выбрать</button>
    </div>
  );
}

export default Card;
