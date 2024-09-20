import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
import './nav.css';

const Nav = () => {
  return (
    <>
      <div className='header'>
        <div className='top_header'>
          <div className='info'>
            <p>PROYECTO DE TIENDA DE LIBROS</p>
          </div>
          <div className='search'>
            <div className='btnLibro'>
              <button>Libros</button>
            </div>
            <div className='btnInicio'>
              <button>Inicio</button>
            </div>
          </div>
          <div className='user'>
            <div className='icon'>
              <TiShoppingCart />
            </div>
            <div className='btn'>
                <button>Regristrarse</button>
            </div>
            <div className='btn'>
              <button>Login</button>
            </div>
          </div>
        </div>

        <div className='mid_header'>
          <div className='mid_text'>
            <h1>LAS PALABRAS TE TRANSPORTAN A NUEVOS HORIZONTES</h1>
            <p>Proyecto final de arquitectura de software</p>
            <button>Ver tienda</button>
          </div>
          <div className='mid_image'>
            <img src='images/imagen_principal.webp' alt="Libros"/>
          </div>
        </div>

        <div className='team'>
          <h2>Equipo de desarrollo</h2>
          <div className='members'>
            <div className='team_member'>
              <img src='images/foto.png' alt="Andrés Forero" />
              <h3>Andrés Forero</h3>
              <p>Backend Developer</p>
            </div>
            <div className='team_member'>
              <img src='images/foto.png' alt="Daniel Garcia" />
              <h3>Daniel Garcia</h3>
              <p>Frontend Developer</p>
            </div>
            <div className='team_member'>
              <img src='images/foto.png' alt="Juan Esteban" />
              <h3>Juan Esteban</h3>
              <p>Analista De Datos</p>
            </div>
          </div>
        </div>
        
        <div className='last_header'>
            <div className='info'>
                <p>PROYECTO DE TIENDA DE LIBROS</p>
            </div>
            <div className='search'>
            <div className='btnLibroFin'>
                <button>Libros</button>
            </div>
            <div className='btnInicioFin'>
                <button>Inicio</button>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Nav;

