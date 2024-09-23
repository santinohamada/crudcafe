import { Navigate } from "react-router-dom";

const RutaProtegida = ({children}) => {
    //agregar la logica que debe cumplir quien puede ver los children
    const userAdmin = JSON.parse(sessionStorage.getItem("userKey")) || null
    //preguntar si no estoy logueado
    
    if(!userAdmin){
        //no soy el admin
        return <Navigate to={"/iniciarSesion"}></Navigate>
    }
    else{
        return children
    }
    
};

export default RutaProtegida;