import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class NavBar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-secondary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link className="navbar-brand text-warning fs-2" to="#"><h2>Instant Newzzz</h2></Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link fs-5" to="#">Home</Link>
                    </li>
                    <li className="nav-item fs-5"><Link className="nav-link" to="business">Business</Link></li>
                    <li className="nav-item fs-5"><Link className="nav-link" to="entertainment">Entertainment</Link></li>
                    <li className="nav-item fs-5"><Link className="nav-link" to="general">General</Link></li>
                    <li className="nav-item fs-5"><Link className="nav-link" to="health">Health</Link></li>
                    <li className="nav-item fs-5"><Link className="nav-link" to="science">Science</Link></li>
                    <li className="nav-item fs-5"><Link className="nav-link" to="sports">Sports</Link></li>
                    <li className="nav-item fs-5"><Link className="nav-link" to="technology">Technology</Link></li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
    )
  }
}

