import React from 'react';
import { SiAmericanexpress } from 'react-icons/si';
import { FaCcMastercard, FaCcVisa, FaCcApplePay } from 'react-icons/fa';
import { IoLogoPaypal } from 'react-icons/io5';
import { TiShoppingCart } from "react-icons/ti";
import './card.css';

const Card = () => {
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

                <div className='card-container'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src='images/tarjeta.png' alt='Libros' />
                        </div>
                        <div className='card-details'>
                            <div className='card-chip'></div>
                            <div className='card-number'>
                                COP 137.970
                            </div>
                        </div>
                    </div>
                    <div className='btnrecarga'>
                        <button>Recargar</button>
                    </div>
                    <div className='payment-options'>
                        <div className='payment-option'>
                            <SiAmericanexpress />
                        </div>
                        <div className='payment-option'>
                            <FaCcMastercard />
                        </div>
                        <div className='payment-option'>
                            <IoLogoPaypal />
                        </div>
                        <div className='payment-option'>
                            <FaCcVisa />
                        </div>
                        <div className='payment-option'>
                            <FaCcApplePay />
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
};

export default Card;

