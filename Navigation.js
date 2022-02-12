import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(){
    return(
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" href="#">
        Kolkata Travels  
        <i class="fa fa-home" aria-hidden="true"></i>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <p className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </p>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="/Book Rooms" className="dropdown-item" >Book Rooms</Link></li>
            <li><Link to="/Reseve a Table" className="dropdown-item">Reserve a Table</Link></li>
            <li><Link to="/Banquet Booking" className="dropdown-item">Banquet Booking</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className="nav-link">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/Reviews" className="nav-link">Reviews</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Navigation;
