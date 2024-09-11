import React from 'react';
import error from '../../assets/error-404.jpg'
const Error404 = () => {
    return (
        <div className='maquetadosPaginas'>
            <div className='text-center'>

            <img src={error} className='w-50' alt="Error 404" />
            </div>
            <div className='text-center'>

            <a href="#" className='btn btn-primary'>Volver al inicio</a>
            </div>
        </div>
    );
};

export default Error404;