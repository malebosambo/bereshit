import React from 'react';
import ProductCard from './components/productCard';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';
import { Link } from 'react-router-dom';

export function App() {

  const products = [
    {
      id: 1,
      name: "Marula Nuts",
      imageUrl: "./marula-nuts.png",
      price: "R0.00",
      quantity: 10
    },
    {
      id: 2,
      name: "Marula Energy Bites",
      imageUrl: "./marula-energy-bites.png",
      price: "R0.00"
    },
    {
      id: 3,
      name: "Moringa Seeds (unshelled)",
      imageUrl: "./moringa-seeds-unshelled.png",
      price: "R0.00"
    },
    {
      id: 4,
      name: "Moringa Leaf Powder",
      imageUrl: "./moringa-leaf-powder.png",
      price: "R0.00"
    },
    {
      id: 5,
      name: "Carob Seed Powder",
      imageUrl: "./carob-seed-powder.png",
      price: "R0.00"
    },
    {
      id: 6,
      name: "Sesame Seeds",
      imageUrl: "./sesame-seeds-unhulled.png",
      price: "R0.00"
    },
    {
      id: 7,
      name: "Parsley",
      imageUrl: "./parsley.png",
      price: "R0.00"
    },
    {
      id: 8,
      name: "Fanugreek Leaves",
      imageUrl: "./fenugreek-leaves.png",
      price: "R0.00"
    },
    {
      id: 9,
      name: "Fanugreek Seeds",
      imageUrl: "./fenugreek-seeds.jpg",
      price: "R0.00"
    }
  ]; 

  return (
    <div className="Home">
      <Header />

      <div className="Main_Content">
        <div className="Marula">
          <h1>The Marula Magic</h1><br />
          <p>Food from trees and herbs contain high concentration of nourishing substances.</p>
          <Link to="/blog/marula">Learn</Link>
        </div>

        <div style={{ textAlign: "center", backgroundColor: "seagreen", padding: "10px" }}><h5>Free delivery for orders over R300!</h5></div>

        <div className="Products">
          <div style={{ textAlign: "center", padding: "30px" }}><h1>Our Products</h1></div>
          <div className="Product_Items">{products.map((product) => <ProductCard id={product.id} name={product.name} image={product.imageUrl} price={product.price} quantity={product.quantity} />)}</div> 
        </div>
  
        <div className="Sustainable">
          <h1>Driven by sustainability</h1><br />

          <p>We use sustainability farming methodology to make a positive contribution to the environment.</p>
          <a href="https://sdgs.un.org/goals">Learn about SDGs</a>
        </div>

        <div className="Health">
          <h1>Healthy Living</h1><br />
          <p>Use our health products to help you enjoy life more and make you worry less about visits to the doctor.</p><br />
          <div className="Health_Item"><div><img src="./brain.png" alt="brain wellness" className="Icon" /></div><h3>Brain Wellness</h3></div>
          <div className="Health_Item"><div><img src="./heart.png" alt="heart wellness" className="Icon" /></div><h3>Heart Wellness</h3></div>
          <div className="Health_Item"><div><img src="./kidney.png" alt="kidney wellness" className="Icon" /></div><h3>Kidney Wellness</h3></div>
          <div className="Health_Item"><div><img src="./intestine.png" alt="intestine wellness" className="Icon" /></div><h3>Intestine Wellness</h3></div>
        </div>

        <div className="Recipe">
          <h1>Weekly Recipe</h1><br />
          <div><img src="./pizza.jpeg" alt="Vegan Pizza" style={{ width: "300px" }} /></div>
          <div><img src="pizza.jpg" alt="Pizza Icon" className="Icon" /><h3>Matso Base Vegan Pizza</h3></div>
          <div><img src="alarm.jpg" alt="Alarm Icon" className="Icon" /><h3>30 min</h3></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export function Shop() {

  return (
    <div className="Shop">
      <Header />
      <div>
        <h1>Shop</h1>
      </div>
      <Footer />
    </div>
  );
}

export function Blog() {

  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
}

export function About() {

  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

export function Contacts() {

  return (
    <div className="Contact">
      <Header />
      <div>
        <h1>Contact Us</h1><br />

        <div>
          <h2>Primary</h2>
          <img src="./Telephone.png" alt="Telephone Icon" className=" Icon" /><p>Cell:<br/> <a href="tel:+27670537445">+27670537445</a></p>
          <img src="./Email.png" alt="Email Icon" className="Icon" /><p>E-mail:<br/> <a href="mailto:manyeletis@gmail.com">manyeletis@gmail.com</a></p>
          <img src="./Location.png" alt="Location Icon" className="Icon" /><p>Address:<br/> 462 Cuba Crescent, Lulekani, 1392</p>
        </div>

        <div>
          <h2>Business Hours</h2>
          <h5>MON - FRI: 09:00 - 16:00</h5>
          <h5>SAT, SUN: CLOSED</h5>
          <h5>PUBLIC HOLIDAY: CLOSED</h5>
        </div>

        <div>
          <h2>Farming Locations</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}
