import React from 'react';
import RecipeForm from '../components/RecipeForm';
import '/home/stela/recipe3/src/App.css'; 

const AddRecipe = () => {
  const handleRecipeCreated = (newRecipe) => {
    console.log('Recipe created:', newRecipe);
    window.location.href = '/';
  };

  return (
    <div className="add-recipe-container">
      <h2>Add Recipe</h2>
      <div className="add-recipe-form">
        <RecipeForm onRecipeCreated={handleRecipeCreated} />
      </div>
    </div>
  );
};

export default AddRecipe;