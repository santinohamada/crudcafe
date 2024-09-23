import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/Logo.png";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const Menu = ({usuarioLogueado,setUsuarioLogueado}) => {
  const navigation = useNavigate()
  const logout = ()=>{
    sessionStorage.removeItem('userKey')
    setUsuarioLogueado('')
    navigation('/')
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand as={Link} to="/" >
          <img src={Logo} width={150} alt="Logo" />
        </Navbar.Brand>

        <div className="d-lg-none">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink end className={'nav-link'} to={'/'}>Inicio</NavLink>
            {usuarioLogueado !== ''?(
              <div className="justify-content-start">
              <NavLink className={'nav-link'} to={'/administrador'}>Administrador</NavLink>
              <Button className={'nav-link'} onClick={logout}> Logout</Button>
              </div>
            )
          :( <NavLink className={'nav-link'} to={'/IniciarSesion'}>Iniciar Sesion</NavLink>)}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
