import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [searchResult, setSearchResult] = useState(null);
  const [companiesList, setCompaniesList] = useState(null);
  return (
    <>
      <Header setSearchResult={setSearchResult} setCompaniesList={setCompaniesList} />
      {searchResult && <Main searchResult={searchResult} companiesList={companiesList} />}
    </>
  );
}

export default App;
