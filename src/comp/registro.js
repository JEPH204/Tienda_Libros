import React from 'react';
import './registro.css';
import { TiShoppingCart } from "react-icons/ti";

const Registro = () => {
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

                <div className='mid_header'>
                    <div className='mid_text'>
                        <h1>REGISTRO</h1>
                        <form className='register_form'>
                            <div className='form_group'>
                                <label htmlFor="name">Digite su Nombre completo:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Nombre completo"
                                    required
                                />
                            </div>
                            <div className='form_group'>
                                <label htmlFor="username">Digite su Usuario:</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Usuario"
                                    required
                                />
                            </div>
                            <div className='form_group'>
                                <label htmlFor="email">Digite su Correo electrónico:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Correo electrónico"
                                    required
                                />
                            </div>
                            <div className='form_group'>
                                <label htmlFor="password">Digite su Contraseña:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    required
                                />
                            </div>
                            <button type="submit" className='register_button'>Registrarse</button>
                        </form>
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

export default Registro