import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from React Router

const RecipeSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Define a function to fetch search results based on the query
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get('http://localhost:4000/search?query=' + searchQuery);
        setSearchResults(response.data); 
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    // Call the fetchSearchResults function when searchQuery changes
    if (searchQuery) {
      fetchSearchResults();
    } else {
      setSearchResults([]); 
    }
  }, [searchQuery]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={handleChange}
      />
      <div>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((recipe) => (
              <li key={recipe.id}>
                <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link> 
              </li>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default RecipeSearch;
