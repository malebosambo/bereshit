import React, { useState } from 'react';
import ProductCard from './components/productCard';
import './App.css';
import { Link } from 'react-router-dom';

export function App() {

  const products = [
    {
      id: 1,
      name: "Marula Nuts",
      imageUrl: "",
      price: ""
    },
    {
      id: 2,
      name: "Marula Energy Bites",
      imageUrl: "",
      price: ""
    },
    {
      id: 3,
      name: "Moringa Seeds (unshelled)",
      imageUrl: "",
      price: ""
    },
    {
      id: 4,
      name: "Moringa Leaf Powder",
      imageUrl: "",
      price: ""
    },
    {
      id: 5,
      name: "Carob Seed Powder",
      imageUrl: "",
      price: ""
    },
    {
      id: 6,
      name: "Sesame Seeds",
      imageUrl: "",
      price: ""
    },
    {
      id: 7,
      name: "Parsley",
      imageUrl: "",
      price: ""
    },
    {
      id: 8,
      name: "Fanugreek Leaves",
      imageUrl: "",
      price: ""
    },
    {
      id: 9,
      name: "Fanugreek Seeds",
      imageUrl: "",
      price: ""
    }
  ];
  
  const [ mobileMenu, setMobileMenu ] = useState(false);
  const showMenu = () => setMobileMenu(!mobileMenu); 

  return (
    <div className="Home">
      <div className="Header">
        <div className="Logo">
          <div><h1>Bereshit</h1></div>
          <div className="Mobile-Menu" style={{padding: "20px"}}>
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
      <div className="Main_Content">
        <div className="Harvest">
          <h1>Harvesting Life</h1>
          <p>We grow a great variety of vegetables and herbs for your kitchen and outdoor cooking.</p>
        </div>
        <div className="Products">
          {products.map((product) => <ProductCard id={product.id} name={product.name} image={product.imageUrl} price={product.price} />)}
        </div>
        <div className="Sustainable">
          <h2>Driven by sustainability</h2>
          <p>We use sustainability farming methodology to make a positive contribution to the environment.</p>
          <p className="Border"><a href="https://sdgs.un.org/goals">Learn about SDGs</a></p>
        </div>
        <div className="Health">
          <h1>Healthy Living</h1>
          <p>Use our health products to help you enjoy life more and make you worry less about visits to the doctor.</p>
          <div className="Health_Item"><img src="./brain.png" alt="brain wellness"/><p>Brain Wellness</p></div>
          <div className="Health_Item"><img src="./heart.png" alt="heart wellness"/><p>Heart Wellness</p></div>
          <div className="Health_Item"><img src="./kidney.png" alt="kidney wellness"/><p>Kidney Wellness</p></div>
          <div className="Health_Item"><img src="./intestine.png" alt="intestine wellness"/><p>Intestine Wellness</p></div>
        </div>
        <div className="Recipe">
          <h3>Weekly Recipe</h3>
          <hr />
          <img src="./pizza.jpeg" alt="vegan pizza" />
          <h2>Matso Base Vegan Pizza</h2>
          <input type="submit" value="Get Recipe" />
        </div>
        <div className="Contact">
          <h1>Contact Us</h1>
          <p>Cell:<br/> <a href="tel:+27670537445">+27670537445</a></p>
          <p>E-mail:<br/> <a href="mailto:manyeletis@gmail.com">manyeletis@gmail.com</a></p>
          <p>Address:<br/> 462 Cuba Crescent, Lulekani, 1392</p>
        </div>
      </div>
    </div>
  );
}

export function Shop() {

  return (
    <div>
      <h1>Shop</h1>
    </div>
  )
}

export function Blog() {

  return (
    <div>
      <h1>Blog</h1>
    </div>
  )
}

export function About() {

  return (
    <div>
      <h1>About</h1>
    </div>
  )
}
