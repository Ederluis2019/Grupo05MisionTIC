import "./App.css";
import ListadeRecogidas from "./components/ListaRecogida";
import AgregarCliente from "./components/AgregarCliente";
import AgregarServicio from "./components/AgregarServicio"
import Loguearse from "./components/Loguearse";
import ModificarRecogida from "./components/ModificarRecogida";
import { BrowserRouter, Routes, Route } from "react-router-dom";//instalamos react-router-dom, para poder crear las rutas, se coloca en el orden de etiquetas ramificadas

function App() {
  return (
    <div classNameNameNameName="App">
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">InstaYa</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="loguearse">Home</a>
        <a className="nav-link" href="loguearse">Iniciar Sesion</a>
        <a className="nav-link" href="agregarcliente">Registrarse</a>
        <a className="nav-link" href="agregarservicio">Programar Recogida</a>
        <a className="nav-link" href="listarecogida">Lista Recogida</a>
      </div>
      
      <form class="d-flex" role="search">
         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
         <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      <BrowserRouter>
        <Routes>
          <Route path="/agregarcliente" element={<AgregarCliente />} exact></Route>
          <Route path="/loguearse" element={<Loguearse />} exact></Route>
          <Route path="/agregarservicio" element={<AgregarServicio />} exact></Route>
          <Route path="/listarecogida" element={<ListadeRecogidas />} exact></Route>
          <Route path="/modificarrecogida" element={<ModificarRecogida />} exact></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
