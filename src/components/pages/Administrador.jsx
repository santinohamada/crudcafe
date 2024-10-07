import React, { useEffect, useState } from "react";
import { Table, Button, Image } from "react-bootstrap";
import fotoCafe from "../../assets/fotoCafe.jpg";
import { Link } from "react-router-dom";
import { leerProductosAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import ItemProducto from "./producto/ItemProducto";
const Administrador = () => {

const [listaProductos,setListaProductos]=useState([])

useEffect(()=>{
obtenerProductos();
},[])

const obtenerProductos = async ()=>{
  const respuesta = await leerProductosAPI();
  console.log(respuesta)
  if(respuesta.status ===200){
    const datos = await respuesta.json()
    setListaProductos(datos)
  }
  else{
    Swal.fire({
      title: "Ocurrio un error",
      text: `En este momento no podemos mostrar los productos, intente en breve..`,
      icon: "error",
    });
  }
}
  return (
    <div className="maquetadosPaginas">
      <div className="container">
        <div className=" mt-3 d-flex justify-content-between align-baseline">
          <h2 className="display-2 d-inline">Productos disponibles</h2>
          <div className="align-self-center">

          <Link className="btn btn-primary" to={'/administrador/crear'} >
          <i className="bi bi-file-earmark-plus"></i>
          </Link>
          </div>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>URL de Imagen</th>
              <th>Categoría</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {
              listaProductos.map((producto,posicion)=><ItemProducto setListaProductos={setListaProductos} key={producto._id} producto={producto} fila={posicion+1} ></ItemProducto>)
            }
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Administrador;
