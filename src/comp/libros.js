import React, {useState} from 'react';
import lista_libros from './lista_libros';
import { TiShoppingCart } from "react-icons/ti";
import './libros.css'

const Libros = () => {
  const [trendingProduct, setTrendingProduct] = useState(lista_libros)
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
              <button>Registrarse</button>
            </div>
            <div className='btn'>
              <button>Login</button>
            </div>
          </div>
        </div>

        <div className='libros'>
          <div className='container'>
            {
              trendingProduct.map(product => (
                <div className='BookCard'>
                  <div>
                  <img src={product.images} className='BookCardImage' />
                  <h1>{product.precio}</h1>
                  <h1>{product.name}</h1>
                  <h1>{product.autor}</h1>
                  </div>
                    
                </div>
                
              ))
            }
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
};

export default Libros;
