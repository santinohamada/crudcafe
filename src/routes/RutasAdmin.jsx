import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Administrador from '../components/pages/Administrador';
import FormularioProducto from '../components/pages/producto/FormularioProducto';

const RutasAdmin = () => {
    return (
        <Routes>
        
        <Route exact path='/administrador' element={<Administrador></Administrador>} ></Route>
        <Route exact path='/administrador/crear' element={<FormularioProducto titulo="Nuevo producto" creandoProducto={true}  ></FormularioProducto>} ></Route>
        <Route exact path='/administrador/editar/:id' element={<FormularioProducto titulo="Editar producto" creandoProducto={false}></FormularioProducto>} ></Route>
       
      </Routes>
    );
};

export default RutasAdmin;