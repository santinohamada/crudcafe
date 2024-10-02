import React from 'react';
import error from '../../assets/error-404.jpg'
import { Link } from 'react-router-dom';
const Error404 = () => {
    return (
        <div className='maquetadosPaginas'>
            <div className='text-center'>

            <img src={error} className='w-50' alt="Error 404" />
            </div>
            <div className='text-center'>

            <Link to="/" className='btn btn-success'>Volver al inicio</Link>
            </div>
        </div>
    );
};

export default Error404;