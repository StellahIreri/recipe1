import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeSearch from '../components/RecipeSearch';
import RecipeCard from '../components/RecipeCard';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:4000/recipes')
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  }, []);

  const handleRecipeDeleted = (deletedRecipeId) => {
    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== deletedRecipeId));
  };

  const handleSearch = (query) => {
    setSearchQuery(query); 
    // You can add code here to filter recipes based on the search query
  };

  // Filter recipes based on the search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-page">
      <div className="search-bar">
        <RecipeSearch onSearch={handleSearch} />
      </div>
      <h1>Whisk and Whip</h1>
      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onDelete={handleRecipeDeleted} />
        ))}
      </div>
    </div>
  );
};

export default Home;
