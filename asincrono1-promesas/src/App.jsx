import React, { useEffect, useState } from "react";
import {FakeStore} from './components/FakeStore';
import {RandomUser} from './components/RandomUser';
import {Pokemon} from './components/Pokemon';
import './index.css';


const Componentes = () => {
  return (
    <div className="container">
      <h1 className="title">ASÍNCRONO 1 - Full Stack - Promesas</h1>
      <div className="grid">
        <FakeStore />
        <RandomUser />
        <Pokemon />
      </div>
    </div>
  );
};

export default Componentes;