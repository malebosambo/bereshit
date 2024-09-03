import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  
  const [ mobileMenu, setMobileMenu ] = useState(false);
  const showMenu = () => setMobileMenu(!mobileMenu);

  return (
    <div className="Header">
      <div className="Logo">
          <div><h1>Bereshit</h1></div>
          <div className="Mobile_Menu">
            <button onClick={showMenu} className={ !mobileMenu ? "" : "Menu" }>=</button>
            <button onClick={showMenu} className={ mobileMenu ? "" : "Menu" }>X</button>
          </div>
      </div>
      <div className={ mobileMenu ? "Menu-Visible" : "Menu" }>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
      </div> 
    </div>
  )  
}