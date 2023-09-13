import React from 'react';
import axios from 'axios';
import RecipeForm from './RecipeForm';

const CreateRecipe = () => {
  const handleFormSubmit = (formData) => {
    axios.post('http://127.0.0.1:4000/recipes', formData)
      .then((response) => {
        console.log(response.data); 
        alert('Event created successfully!'); 
      })
      .catch((error) => {
        console.error(error); 
        alert('An error occurred while creating the recipe.'); 
      });
  };

  return (
    <div>
      <h2>Create New Recipe</h2>
      <RecipeForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default CreateRecipe;
