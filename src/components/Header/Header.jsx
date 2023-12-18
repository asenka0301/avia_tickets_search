// eslint-disable react/prop-types
import React from 'react';
import styles from './Header.module.css';
import Form from '../Form/Form';

function Header({ setSearchResult, setCompaniesList }) {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.content}>
          <h1 className={styles.title}>Поиск авиабилетов</h1>
          <Form
            setSearchResult={setSearchResult}
            setCompaniesList={setCompaniesList}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
