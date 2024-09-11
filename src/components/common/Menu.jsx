import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/Logo.png'
const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
  <Container className='d-flex justify-content-between'>
  <Navbar.Brand href="#home">
    <div className='Logo'>
        <img src={Logo} alt="Logo" />
    </div>
</Navbar.Brand>

    <div className='d-lg-none'>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </div>

    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
      <Nav>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    );
};

export default Menu;