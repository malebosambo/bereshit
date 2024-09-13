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
            <div><span class="material-icons">shopping_bag</span><span>0</span></div>
            <div onClick={showMenu} className={ !mobileMenu ? "" : "Menu" }><span class="material-symbols-outlined">
menu
</span></div>
            <button onClick={showMenu} className={ mobileMenu ? "" : "Menu" }><span class="material-symbols-outlined">
close
</span></button>
          </div>
      </div>
      <div className={ mobileMenu ? "Menu-Visible" : "Menu" }>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <Link to="/contact-us">Contact Us</Link>
      </div> 
    </div>
  )  
}