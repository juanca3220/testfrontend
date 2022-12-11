import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './paginas/login'
import Inicio from './paginas/inicio'
import Home from './paginas/home'
import Logout from './paginas/logout'
import Clientes from './paginas/clientes'
import ClienteEdit from './paginas/clientes-edit'
import ClienteRegistrar from './paginas/registrar-cliente'

function App() {

  return (

    <Router>
        <Routes>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/" exact element={<Inicio/>}/>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/logout" exact element={<Logout/>}/>

          <Route path="/clientes" exact element={<Clientes/>}/>
          <Route path="/clientes-registrar" exact element={<ClienteRegistrar/>}/>
          <Route path="/clientes-edit/:idcliente" exact element={<ClienteEdit/>}/>

        </Routes>
      </Router>


  );
}

export default App;