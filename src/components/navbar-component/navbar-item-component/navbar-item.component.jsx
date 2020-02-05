import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar-item.component.styles.css'

const NavbarItem = ({ text, path }) => {
    return (
        <li className="list-link"><NavLink className="nav-link" exact to={path} activeStyle={{ backgroundColor: 'rgba(0,0,0,0.5)', color: '#4DDB20'}}>{text}</NavLink></li>
      );
}
 
export default NavbarItem;