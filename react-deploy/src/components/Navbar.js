import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <NavLink className="navbar-brand" to="/" exact>Gerard Ubuntu</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/' exact>Home<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/projects" exact>Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/contact' exact>Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/about' exact>About</NavLink>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
