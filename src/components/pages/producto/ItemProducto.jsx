import React from 'react';
import { Button } from 'react-bootstrap';

const ItemProducto = ({producto,fila}) => {
    return (
            <tr>
              <td> {fila} </td>
              <td>{producto.nombreProducto} </td>
              <td>{producto.precio} </td>
              <td>
                <img src={producto.imagen} alt={"Imagen de " + producto.nombreProducto} className='w-100' />
              </td>
              <td>{producto.categoria}</td>
              <td>
                <Button variant="warning" className="me-2">
                  <i className="bi bi-pencil-square"></i>
                </Button>
                <Button variant="danger">
                  <i className="bi bi-trash"></i>
                </Button>
              </td>
            </tr>
    );
};

export default ItemProducto;