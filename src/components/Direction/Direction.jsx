import React from 'react';
import styles from './Direction.module.css';
import {
  getTime,
  getDate,
  getMinutesAndHours,

} from '../../utils/utils';

function Direction({ route, carrier }) {
  return (
    <div className={styles.destination}>

      <div className={styles.cities}>
        <div className="departureCity">
          {
          `${route.segments[0].departureCity.caption},
          ${route.segments[0].departureAirport.caption}
          `
          }
          <span className="blue-text">{`(${route.segments[0].departureAirport.uid})`}</span>
        </div>
        <span className="arrow blue-text">&rarr;</span>
        <div className="arrivalCity">
          {
          `${route.segments[route.segments.length - 1].arrivalCity.caption},
          ${route.segments[route.segments.length - 1].arrivalAirport.caption}
          `
          }
          <span className="blue-text">
            {`(${route.segments[route.segments.length - 1].arrivalAirport.uid})`}
          </span>
        </div>
      </div>

      <div className={styles.timeContainer}>
        <div className={styles.timeInfo}>
          <div className="departureInfo">
            <div className={styles.time}>
              {getTime(route.segments[0].departureDate)}
              <span className={styles.date}>
                {getDate(route.segments[0].departureDate)}
              </span>
            </div>
          </div>
          <div>
            <span className="ico" />
            <span className={styles.duration}>
              {getMinutesAndHours(route.duration)}
            </span>
          </div>
          <div className="arrivalInfo">
            <div className={styles.time}>
              {getTime(route.segments[route.segments.length - 1].arrivalDate)}
              <span className={styles.date}>
                {getDate(route.segments[route.segments.length - 1].arrivalDate)}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.transfer}>
          <div className={styles.line} />
          <div className={styles['text-in-line']}>
            { route.segments.length > 1
            && `${route.segments.length - 1} пересадка`}
          </div>
        </div>
      </div>
      <div className={styles.carrier}>{`Рейс выполняет: ${carrier.caption}`}</div>
    </div>
  );
}

export default Direction;
