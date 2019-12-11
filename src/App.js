import React from 'react';
import Header from './components/Header/Header';
import ProductGridContainer from './components/ProductGridContainer/ProductGridContainer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <ProductGridContainer />
    </div>
  );
}

export default App;
