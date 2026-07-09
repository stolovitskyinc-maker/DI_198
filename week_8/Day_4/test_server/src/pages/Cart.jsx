import { Link } from 'react-router-dom';

function Cart({ cart, setCart }) {
  // Calculate total price accurately
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const priceNum = parseFloat(item.price.replace('$', ''));
      return total + (priceNum * item.quantity);
    }, 0).toFixed(2);
  };

  const clearCart = () => setCart([]);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Your Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/shop" style={{ color: 'var(--accent)' }}>Go back to shop</Link>
        </div>
      ) : (
        <div>
          {/* Matches layout styling from app.css */}
          <div className="cart-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div>
                  <h3 style={{ margin: '0 0 0.25rem 0' }}>{item.name}</h3>
                  <p style={{ margin: 0 }}>Quantity: {item.quantity}</p>
                </div>
                <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{item.price}</p>
              </div>
            ))}
          </div>
          
          <h2 style={{ marginTop: '2rem', textAlign: 'right' }}>Total: ${calculateTotal()}</h2>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
            <button onClick={clearCart} className="btn-danger">
              Clear Cart
            </button>
            <button onClick={() => alert('Proceeding to checkout...')} className="btn-primary" style={{ width: 'auto' }}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
