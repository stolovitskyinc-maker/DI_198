import { Link } from 'react-router-dom';

function Shop() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: "$99.99", description: "High-quality sound with noise-canceling technology." },
    { id: 2, name: "Minimalist Watch", price: "$149.99", description: "Sleek and classic design perfect for any occasion." },
    { id: 3, name: "Leather Backpack", price: "$79.99", description: "Durable, water-resistant pack with a laptop sleeve." }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Shop Page</h1>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1.5rem', width: '250px' }}>
            {/* Dynamic Link using template literals */}
            <Link to={`/shop/${product.id}`}>
              <h3>{product.name}</h3>
            </Link>
            <p style={{ fontWeight: 'bold', color: '#2ecc71' }}>{product.price}</p>
            <p style={{ fontSize: '0.9rem' }}>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
