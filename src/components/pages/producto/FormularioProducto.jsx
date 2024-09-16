import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearProductoAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";
const FormularioProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (producto) => {
    console.log(producto);
    const respuesta = await crearProductoAPI(producto);
    if (respuesta.status === 201) {
      console.log("Se creo el producto");
      reset();
      Swal.fire({
        title: "Producto creado",
        text: `No se pudo crear el producto ${producto.nombreProducto}, fue creado correctamente `,
        icon: "success",
      });
    } else {
      //mostrar un cartel de error al usuario
      Swal.fire({
        title: "Ocurrio un error",
        text: `No se pudo crear el producto ${producto.nombreProducto}, intente esta operacion en unos minutos `,
        icon: "error",
      });
    }
  };
  return (
    <div className="maquetadosPaginas">
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <h1 className=" display-3 p-1 border-bottom">Nuevo producto</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formProducto">
                <Form.Label>Producto*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Cafe"
                  {...register("nombreProducto", {
                    required: "El nombre del producto es un dato obligatorio",
                    minLength: {
                      value: 2,
                      messagge: "Debe ingresar como minimo 2 caracteres",
                    },
                    maxLength: {
                      value: 50,
                      messagge:
                        "Debe ingresar como maximo 50 caracteres inclusive",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.nombreProducto?.message}{" "}
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formPrecio">
                <Form.Label>Precio*</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ej: 50"
                  {...register("precio", {
                    required: "El precio es un valor obligatorio",
                    min: {
                      value: 50,
                      message: "El valor minimo debe ser mayor a $50",
                    },
                    max: {
                      value: 20000,
                      message: "El valor maximo debe ser $20000",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.precio?.message}{" "}
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formImagenUrl">
                <Form.Label>Imagen URL*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: https://www.ejemplo.com/imagen.jpg"
                  {...register("imagen", {
                    required: "La url de la imagen debe ser obligatoria",
                    pattern: {
                      value:
                        /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                      message:
                        "Debe ingresar una url de imagen valida. Los formatos admitidos son: (jpg|jpeg|gif|png)",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.imagen?.message}{" "}
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formCategoria">
                <Form.Label>Categoría*</Form.Label>
                <Form.Select
                  {...register("categoria", {
                    required: "Debe seleccionar una categoria",
                  })}
                >
                  <option value="">Seleccione una opción</option>
                  <option value="Infusiones">Infusiones</option>
                  <option value="Batidos">Batidos</option>
                  <option value="Dulce">Dulce</option>
                  <option value="Salado">Salado</option>
                </Form.Select>
                <Form.Text className="text-danger">
                  {errors.categoria?.message}{" "}
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formDescripcionBreve">
                <Form.Label>Descripción breve*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Una taza de café suave y aromático."
                  {...register("descripcion_breve", {
                    required: "La descripcion breve debe ser obligatoria",
                    minLength: {
                      value: 5,
                      message:
                        "Debe ingresar una descripcion de 5 caracteres como minimo",
                    },
                    maxLength: {
                      value: 50,
                      message:
                        "Debe ingresar como maximo una descripcion de 50 caracteres ",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.descripcion_breve?.message}{" "}
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formDescripcionAmplia">
                <Form.Label>Descripción Amplia*</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Ej: El café americano es una bebida..."
                  {...register("descripcion_amplia", {
                    required: "La descripcion amplia debe ser obligatoria",
                    minLength: {
                      value: 10,
                      message:
                        "Debe ingresar una descripcion de 10 caracteres como minimo",
                    },
                    maxLength: {
                      value: 250,
                      message:
                        "Debe ingresar como maximo una descripcion de 250 caracteres ",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.descripcion_amplia?.message}{" "}
                </Form.Text>
              </Form.Group>

              <Button className="my-3" variant="success" type="submit">
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
