import React from 'react';
import Componente1 from './components/componente1';
import Componente2 from './components/componente2';
import Componente3 from './components/componente3';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <h1>Asíncrono 1 - Full Stack - Promesas</h1>
      <Componente1 />
      <Componente2 />
      <Componente3 />
    </div>
  );
};

export default App;