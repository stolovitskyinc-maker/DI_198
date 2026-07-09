import { useParams, Link } from 'react-router-dom';

function ProductDetail({ addToCart }) { // Accept the prop here
  const { id } = useParams();

  const products = [
    { id: 1, name: "Wireless Headphones", price: "$99.99", description: "High-quality sound with noise-canceling technology." },
    { id: 2, name: "Minimalist Watch", price: "$149.99", description: "Sleek and classic design perfect for any occasion." },
    { id: 3, name: "Leather Backpack", price: "$79.99", description: "Durable, water-resistant pack with a laptop sleeve." }
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found!</h2>;

  return (
    <div style={{ padding: '2rem' }}>
      <Link to="/shop">← Back to Shop</Link>
      <h1 style={{ marginTop: '1rem' }}>{product.name}</h1>
      <p style={{ fontWeight: 'bold', color: '#2ecc71', fontSize: '1.5rem' }}>{product.price}</p>
      <p>{product.description}</p>
      {/* Pass the found product to the function on click */}
      <button 
        onClick={() => addToCart(product)} 
        style={{ backgroundColor: '#2ecc71', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;
