import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';

function App() {
  const [searchResult, setSearchResult] = useState(null);
  console.log(searchResult, 'данные получены');
  return (
    <>
      <Header setSearchResult={setSearchResult} />
      {searchResult && <main>Данные получены</main>}
    </>
  );
}

export default App;
