import React from 'react';
import NavbarItem from './navbar-item-component/navbar-item.component';

import './navbar.component.styles.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <NavbarItem text="home" path="/" />
                <NavbarItem text="busreizen" path="/busreizen" />
                <NavbarItem text="touringcar verhuur" path="/touringcar-verhuur" />
                <NavbarItem text="vip diensten" path="/vip-diensten" />
                <NavbarItem text="contact" path="/contact" />
            </ul>
        </nav>
    );
}
 
export default Navbar;