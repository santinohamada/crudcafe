import React from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { borrarProductoAPI, leerProductosAPI } from '../../../helpers/queries';
import { Link } from 'react-router-dom';
const ItemProducto = ({producto,fila,setListaProductos}) => {
    
const borrarProducto=()=>{
    Swal.fire({
        title: "Estas seguro de borrar el producto?",
        text: "No puedes revertir esta operacion",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Borrar!",
        cancelButtonText: "cancelar"
      }).then(async(result) => {
        if (result.isConfirmed) {

const respuesta = await borrarProductoAPI(producto._id)
if(respuesta.status ===200){

    Swal.fire({
      title: "Producto eliminado",
      text: `El producto ${producto.nombreProducto} fue eliminado.`,
      icon: "success"
    });
    const productoAPI = await leerProductosAPI()
    if(productoAPI.status ===200){
        const prodActualizados =  await productoAPI.json()
        setListaProductos(prodActualizados)
    }
}
else{
    Swal.fire({
        title: "Ocurrio un error",
        text: `El producto ${producto.nombreProducto} no pudo ser eliminado, intente esta operacion luego `,
        icon: "error",
      });
}
        }
      });
}

    return (
            <tr>
              <td> {fila} </td>
              <td>{producto.nombreProducto} </td>
              <td> ${producto.precio} </td>
              <td>
                <img src={producto.imagen}  alt={"Imagen de " + producto.nombreProducto} style={{width:"150px",
              }} />
              </td>
              <td>{producto.categoria}</td>
              <td>
                <Link  className="btn btn-warning me-2" to={`/administrador/editar/${producto._id}`}>
                  <i className="bi bi-pencil-square"></i>

                  
                </Link>
                <Button variant="danger" onClick={borrarProducto}>
                  <i className="bi bi-trash"></i>
                </Button>
              </td>
            </tr>
    );
};

export default ItemProducto;