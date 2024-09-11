import React from "react";
import { Table, Button, Image } from "react-bootstrap";
import fotoCafe from "../../assets/fotoCafe.jpg";
import { Link } from "react-router-dom";
const Administrador = () => {
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
            <tr>
              <td>1</td>
              <td>Café americano</td>
              <td>$250</td>
              <td>
                <Image src={fotoCafe} thumbnail width="150" />
              </td>
              <td>Bebida caliente</td>
              <td>
                <Button variant="warning" className="me-2">
                  <i className="bi bi-pencil-square"></i>
                </Button>
                <Button variant="danger">
                  <i className="bi bi-trash"></i>
                </Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Café americano</td>
              <td>$250</td>
              <td>
                <Image src={fotoCafe} thumbnail width="150" />
              </td>
              <td>Bebida caliente</td>
              <td>
                <Button variant="warning" className="me-2">
                  <i className="bi bi-pencil-square"></i>
                </Button>
                <Button variant="danger">
                  <i className="bi bi-trash"></i>
                </Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Café americano</td>
              <td>$250</td>
              <td>
                <Image src={fotoCafe} thumbnail width="150" />
              </td>
              <td>Bebida caliente</td>
              <td>
                <Button variant="warning" className="me-2">
                  <i className="bi bi-pencil-square"></i>
                </Button>
                <Button variant="danger">
                  <i className="bi bi-trash"></i>
                </Button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Café americano</td>
              <td>$250</td>
              <td>
                <Image src={fotoCafe} thumbnail width="150" />
              </td>
              <td>Bebida caliente</td>
              <td>
                <Button variant="warning" className="me-2">
                  <i className="bi bi-pencil-square"></i>
                </Button>
                <Button variant="danger">
                  <i className="bi bi-trash"></i>
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Administrador;
