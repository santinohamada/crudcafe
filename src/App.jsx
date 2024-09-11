import './App.css'
import Footer from './components/common/Footer'
import Menu from './components/common/Menu'
import Inicio from './components/pages/Inicio'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Error404 from './components/pages/Error404';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Administrador from './components/pages/Administrador';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioProducto from './components/pages/producto/FormularioProducto';
function App() {


  return (
    <>
      {/* <Menu></Menu>
      <Inicio></Inicio>
      <Footer></Footer> */}
      <BrowserRouter>
<Menu></Menu>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>} ></Route>
        <Route exact path='/administrador' element={<Administrador></Administrador>} ></Route>
        <Route exact path='/administrador/crear' element={<FormularioProducto></FormularioProducto>} ></Route>
        <Route exact path='/administrador/editar' element={<FormularioProducto></FormularioProducto>} ></Route>
        <Route path='*' element={<Error404></Error404>} ></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>

    </>
  )
}

export default App
