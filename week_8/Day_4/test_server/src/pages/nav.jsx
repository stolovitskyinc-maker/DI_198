import { Link } from 'react-router-dom';

function Nav({ cartCount }) { // Accepts the counter prop from App.jsx
  return (
    <header>
      <nav>
        <Link to='/'><h1>Home</h1></Link>
        <Link to='/about'><h1>About</h1></Link>
        <Link to='/shop'><h1>Shop</h1></Link>
        {/* Dynamic Cart Link displaying the total item count */}
        <Link to='/cart'>
          <h1>Cart ({cartCount || 0})</h1>
        </Link>
      </nav>
    </header>
  );
}

export default Nav;
