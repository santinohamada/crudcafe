import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate(); // Hook para la redirección

  const goToInicioPage = () => {
    navigate('/'); // Redirige a la página "Inicio"
  };
  const onSubmit = ()=>{
    
reset()
let timerInterval;
Swal.fire({
  title: "Sesion iniciada!",
  html: "Seras redirigido al inicio en <b></b> milisegundos.",
  timer: 1000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    goToInicioPage()
  }
});
  }
  return (
    <div className="maquetadosPaginas container my-3">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su Email" {...register('Email',{
            required: 'El Email es obligatorio',
            pattern : { value:/^[a-z0-9!#$%&'*+\=?^_`{|}~-]{1,64}(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/gm
            ,
            message: "El correo que ingresó no es valido"}
          })} />
          <Form.Text className="text-danger">
                  {errors.Email?.message}{" "}
                </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su contraseña" 
          {...register('password',{
            required:'Este campo es obligatorio'
          })}
          />
          <Form.Text className="text-danger">
                  {errors.password?.message}{" "}
                </Form.Text>
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LogIn;
