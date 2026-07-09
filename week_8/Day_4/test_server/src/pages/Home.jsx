import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {/* 🚀 Your environment variable is injected here */}
      <h1>Welcome to {import.meta.env.VITE_STORE_NAME}!</h1>
      
      <p>Discover amazing products and learn more about what we do.</p>
      
      <Link to="/shop">
        <button style={{
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          fontSize: '1rem',
          cursor: 'pointer',
          marginTop: '1rem'
        }}>
          Explore the Shop
        </button>
      </Link>
    </div>
  );
}

export default Home;
