import React from "react";
import fotoCafe from "../../assets/fotoCafe.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardFooter } from "react-bootstrap";
const Inicio = () => {
  return (
    <div className="maquetadosPaginas">
        <div className="container">
      <h2>Nuestros Productos</h2>
      <div className="row">
        <div className="my-2 col-3">
          <Card>
            <Card.Img variant="top" src={fotoCafe} />
            <Card.Body>
              <h5 className="verdeOscuro">Capuchino</h5>
              <Card.Text>
                Descripcion: Espuma de leche cremosa sobre un espresso fuerte.
              </Card.Text>
              <div className="p-0 m-0">
                <b>Precio: $350</b>
              </div>
            </Card.Body>
            <CardFooter>
              <div className="text-end">
                <a className="btn btn-success">Go somewhere</a>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="my-2 col-3">
          <Card>
            <Card.Img variant="top" src={fotoCafe} />
            <Card.Body>
              <h5 className="verdeOscuro">Capuchino</h5>
              <Card.Text>
                Descripcion: Espuma de leche cremosa sobre un espresso fuerte.
              </Card.Text>
              <div className="p-0 m-0">
                <b>Precio: $350</b>
              </div>
            </Card.Body>
            <CardFooter>
              <div className="text-end">
                <a className="btn btn-success">Go somewhere</a>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="my-2 col-3">
          <Card>
            <Card.Img variant="top" src={fotoCafe} />
            <Card.Body>
              <h5 className="verdeOscuro">Capuchino</h5>
              <Card.Text>
                Descripcion: Espuma de leche cremosa sobre un espresso fuerte.
              </Card.Text>
              <div className="p-0 m-0">
                <b>Precio: $350</b>
              </div>
            </Card.Body>
            <CardFooter>
              <div className="text-end">
                <a className="btn btn-success">Go somewhere</a>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="my-2 col-3">
          <Card>
            <Card.Img variant="top" src={fotoCafe} />
            <Card.Body>
              <h5 className="verdeOscuro">Capuchino</h5>
              <Card.Text>
                Descripcion: Espuma de leche cremosa sobre un espresso fuerte.
              </Card.Text>
              <div className="p-0 m-0">
                <b>Precio: $350</b>
              </div>
            </Card.Body>
            <CardFooter>
              <div className="text-end">
                <a className="btn btn-success">Go somewhere</a>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="my-2 col-3">
          <Card>
            <Card.Img variant="top" src={fotoCafe} />
            <Card.Body>
              <h5 className="verdeOscuro">Capuchino</h5>
              <Card.Text>
                Descripcion: Espuma de leche cremosa sobre un espresso fuerte.
              </Card.Text>
              <div className="p-0 m-0">
                <b>Precio: $350</b>
              </div>
            </Card.Body>
            <CardFooter>
              <div className="text-end">
                <a className="btn btn-success">Go somewhere</a>
              </div>
            </CardFooter>
          </Card>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
