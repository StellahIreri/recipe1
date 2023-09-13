import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import AddRecipe from './pages/AddRecipe';
import EditRecipe from './pages/EditRecipe';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  // Assume isLoggedIn state to track user authentication.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle user login.
  const handleLogin = () => {
    // Perform authentication logic, set isLoggedIn to true on success.
    setIsLoggedIn(true);
  };

  // Function to handle user logout.
  const handleLogout = () => {
    // Perform logout logic, set isLoggedIn to false.
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/add-recipe">Add Recipe</Link>
              </li>
              <li>
                <Link to="/logout" onClick={handleLogout}>Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-recipe" element={isLoggedIn ? <AddRecipe /> : <Navigate to="/login" />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/edit" element={ <EditRecipe /> } />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
