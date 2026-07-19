import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./ErrorBoundary";

function HomeScreen() {
  return <h1>Home Screen</h1>;
}

function ProfileScreen() {
  return <h1>Profile Screen</h1>;
}

function ShopScreen() {
  throw new Error("Shop is currently broken!");
  // Note: code after a throw never executes,
  // this is just here so you understand why nothing returns.
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/profile"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/shop"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <HomeScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/profile"
            element={
              <ErrorBoundary>
                <ProfileScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/shop"
            element={
              <ErrorBoundary>
                <ShopScreen />
              </ErrorBoundary>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;