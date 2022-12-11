import React from "react";
import { Link } from 'react-router-dom';

const menuNavegacion = () => {

    return (

        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link to={"/"} className="nav-link">
                                Inicio
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to={"/login"} className="nav-link">
                                Login
                            </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Registrar usuario</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );

}

export default menuNavegacion;