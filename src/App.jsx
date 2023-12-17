import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/header/Header';
import Card from './components/Card/Card';

function App() {
  const [searchResult, setSearchResult] = useState(null);
  return (
    <>
      <Header setSearchResult={setSearchResult} />
      {searchResult
      && (
      <main className="wrapper main">
        <div className="filters" />
        <div className="fligths-container">
          {searchResult.length === 0 && <div>Полеты не найдены</div>}
          {searchResult.map(({ flight }) => <Card flight={flight} key={uuidv4()} />)}
        </div>
      </main>
      )}
    </>
  );
}

export default App;
