import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
import './login.css';

const Login = () => {
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
                        <h1>LOGIN</h1>
                        <form className='login_form'>
                            <div className='form_group'>
                                <label htmlFor="username">Digita tu usuario:</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Usuario"
                                    required
                                />
                            </div>
                            <div className='form_group'>
                                <label htmlFor="password">Digita tu contraseña:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    required
                                />
                            </div>
                            <button type="submit" className='login_button'>Ingresar</button>
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

export default Login;
