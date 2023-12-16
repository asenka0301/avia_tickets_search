import React, { useRef } from 'react';
import styles from './Form.module.css';

function Form() {
  const refTo = useRef();
  const refFrom = useRef();
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="Откуда" />
      <input className={styles.input} type="text" placeholder="Куда" />
      <input
        ref={refTo}
        className={styles.input}
        placeholder="Когда"
        onFocus={() => refTo.current.type = 'date'}
        onBlur={() => refTo.current.type = 'text'}
      />
      <input
        ref={refFrom}
        className={styles.input}
        placeholder="Обратно"
        onFocus={() => refFrom.current.type = 'date'}
        onBlur={() => refFrom.current.type = 'text'}
      />
      <button type="submit">Найти билеты</button>
    </form>
  );
}

export default Form;
