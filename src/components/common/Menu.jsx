import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
const Menu = () => {
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
            <NavLink className={'nav-link'} to={'/administrador'}>Administrador</NavLink>
            <NavLink className={'nav-link'} to={'/IniciarSesion'}>Iniciar Sesion</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
