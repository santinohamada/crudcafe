import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
const FormularioProducto = () => {
    return (
        <div className='maquetadosPaginas'>
            <Container>
      <Row className="justify-content-md-center">
        <Col >
          <h1 className=' display-3 p-1 border-bottom'>Nuevo producto</h1>
          <Form>
            <Form.Group controlId="formProducto">
              <Form.Label>Producto*</Form.Label>
              <Form.Control type="text" placeholder="Ej: Cafe" />
            </Form.Group>

            <Form.Group controlId="formPrecio">
              <Form.Label>Precio*</Form.Label>
              <Form.Control type="number" placeholder="Ej: 50" />
            </Form.Group>

            <Form.Group controlId="formImagenUrl">
              <Form.Label>Imagen URL*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: https://www.ejemplo.com/imagen.jpg"
              />
            </Form.Group>

            <Form.Group controlId="formCategoria">
              <Form.Label>Categoría*</Form.Label>
              <Form.Control as="select">
                <option>Seleccione una opción</option>
                <option>Categoria 1</option>
                <option>Categoria 2</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formDescripcionBreve">
              <Form.Label>Descripción breve*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Una taza de café suave y aromático."
              />
            </Form.Group>

            <Form.Group controlId="formDescripcionAmplia">
              <Form.Label>Descripción Amplia*</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ej: El café americano es una bebida..."
              />
            </Form.Group>

            <Button className='my-3' variant="success" type="submit">
              Guardar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
        </div>
    );
};

export default FormularioProducto;