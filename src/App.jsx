import "./App.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Inicio from "./components/pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/pages/Error404";
import "bootstrap-icons/font/bootstrap-icons.css";

import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from "./components/pages/LogIn";
import DetalleProducto from "./components/pages/DetalleProducto";
import { useState } from "react";
import RutaProtegida from "./routes/RutaProtegida";
import RutasAdmin from "./routes/RutasAdmin";
function App() {
  const usuario = JSON.parse(sessionStorage.getItem("userKey")) || "";
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <>
      {/* <Menu></Menu>
      <Inicio></Inicio>
      <Footer></Footer> */}
      <BrowserRouter>
        <Menu
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route
            exact
            path="/detalle/:id"
            element={<DetalleProducto></DetalleProducto>}
          ></Route>
          <Route
            exact
            path="/IniciarSesion"
            element={<LogIn setUsuarioLogueado={setUsuarioLogueado}></LogIn>}
          ></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
          <Route
            exact
            path="/administrador/*"
            element={
              <RutaProtegida>
                <RutasAdmin></RutasAdmin>
              </RutaProtegida>
            }
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
