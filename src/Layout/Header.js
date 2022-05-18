import React from 'react';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand mb-0 h1">Knock&Go</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Diagnostico</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Descargas</a>
                        </li>
                        <li className="nav-item mh-a">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;