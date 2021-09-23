import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Usuarios from './Componentes/Usuarios';
import Contactos from './Componentes/Contactos';
import Inicio from './Componentes/Inicio';
import Formulario from './Componentes/Formulario';
import React from "react";

function App() {
  return (
    <div className="App">
      <header /*className="App-header"*/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            editar <code>src/App.js </code> guardar y recargar.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Inicio</Link>
                  </li>
                  <li>
                    <Link to="/Contactos">Contactos</Link>
                  </li>
                  <li>
                    <Link to="/Usuarios">Usuarios</Link>
                  </li>
                  <li>
                    <Link to="/Formulario">Formulario</Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/Formulario">
                  < Formulario />
                </Route>  
                <Route path="/Contactos">
                  < Contactos />
                </Route>
                <Route path="/Usuarios">
                  <Usuarios />
                </Route>
                <Route path="/">
                  <Inicio />
                </Route>
              </Switch>
            </div>
          </Router>
        </header>
    </div>
  );
}

export default App;
