import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = ({ onRecipeCreated }) => {
  const [formData, setFormData] = useState({
    name: '',
  ingredients: '', 
  instructions: '', 

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
   
      console.log('Sending formData:', formData); 
      axios.post('http://127.0.0.1:4000/recipes', formData)
      .then((response) => {
        console.log('Recipe created:', response.data); 
        onRecipeCreated(response.data); 
        setFormData({ 
          name: '',
          ingredients: '', 
          instructions: '', 
        });
      })
      .catch((error) => {
        console.error('Error creating recipe:', error);
      });
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>Ingredients:</label>
      <textarea name="ingredients" value={formData.ingredients} onChange={handleChange} required />

      <label>Instructions:</label>
      <textarea name="instructions" value={formData.instructions} onChange={handleChange} required />

      <button type="submit">Create Recipe</button>
    </form>
  );
};

export default RecipeForm;
