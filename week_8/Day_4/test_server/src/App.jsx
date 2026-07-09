import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";   
import ProductDetail from "./pages/ProductDetail"; 
import Cart from "./pages/Cart"; // Import new Cart page
import Nav from "./pages/Nav"; 

function App() {
  const [cart, setCart] = useState([]);

  // Function to handle adding items to the global cart state
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    alert(`${product.name} added to cart!`);
  };

  return (
    <section id='center'>
      {/* Pass cart length to show a badge in Nav if you want */}
      <Nav cartCount={cart.reduce((total, item) => total + item.quantity, 0)} /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} /> 
        {/* Pass addToCart function down to ProductDetail */}
        <Route path="/shop/:id" element={<ProductDetail addToCart={addToCart} />} /> 
        {/* Pass cart items and state updater down to Cart page */}
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='*' element={<h2>404 page not found</h2>} />
      </Routes>
    </section>
  );
}

export default App;
