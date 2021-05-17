import React from 'react';
import "./navbar.style.css"

const Navbar = () => {
    return (
        <nav className="site-nav row mt-2">
            <h2 className="site-header col-lg-8">
                Image Repository
            </h2>
            <ul className="nav-link-top col-lg-4">
                <li data-bs-toggle="modal" data-bs-target="#formModal" className="pe-3 pb-2 pt-2 ps-3 me-4">Sign up</li>
                <li data-bs-toggle="modal" data-bs-target="#formModal" className="pe-3 pb-2 pt-2 ps-3">Login</li>
            </ul>
        </nav>
    );
}

export default Navbar;