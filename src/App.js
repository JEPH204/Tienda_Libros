import React from 'react';
import Nav from './comp/nav';
import Libros from './comp/libros';
import Login from './comp/login'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registro from './comp/registro';
import Card from './comp/card';

const App = () => {
  return (
    <BrowserRouter>
      <Libros />
    </BrowserRouter>
  );
}

export default App;


