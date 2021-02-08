import React, { useState } from 'react';
import { Link } from "react-router-dom";

const header = ( props ) => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <Link className="nav-link text-white nav-title" to="/">Claire Demo</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} 
                aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/">Watchlist App<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/architecture">Architecture</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-primary linkedin" href="https://www.linkedin.com/in/claire-min/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link blog" href="https://clairebearmin.blogspot.com/" target="_blank" rel="noopener noreferrer">Blog</a>
                </li>
            </ul>
            </div>
        </nav>                  
    )
};

export default header;