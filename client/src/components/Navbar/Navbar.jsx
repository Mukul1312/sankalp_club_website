import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="bg-dark">
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <div className="">
                        <Link className="navbar-brand" to="/">Sankalp</Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-lg-0">
                            <li className="nav-item">
                                <Link className="custom-nav-link active-link" aria-current="page" to="/" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="custom-nav-link" to="/team" >Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="custom-nav-link" to="/contact" >Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="custom-nav-link" to="/signin" >Login</Link>
                            </li>
                            <li>
                                <button className="btn btn-outline-light btn-sm" type="submit">DONATE</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
