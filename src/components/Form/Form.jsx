import React from 'react';
import styles from './Form.module.css';

function Form() {
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="Откуда" />
      <input className={styles.input} type="text" placeholder="Куда" />
      <button type="submit">Найти билеты</button>
    </form>
  );
}

export default Form;
