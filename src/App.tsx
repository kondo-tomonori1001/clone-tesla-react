import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { Items } from './components/item/Item';

function App() {
  return (
    <div className="App">
      <Header />
      <Items/>
    </div>
  );
}

export default App;
