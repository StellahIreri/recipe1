import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
// import '/home/stela/recipe3/src/App.css';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:4000/recipes/${id}`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error('Error fetching recipe details:', error);
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://127.0.0.1:4000/recipes/${id}`)
      .then(() => {
        navigate('/recipes');
      })
      .catch((error) => {
        console.error('Error deleting recipe:', error);
      });
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  // Ensure that recipe.ingredients and recipe.instructions are always initialized as arrays
  const ingredientsArray = Array.isArray(recipe.ingredients) ? recipe.ingredients : [recipe.ingredients];
  const instructionsArray = Array.isArray(recipe.instructions) ? recipe.instructions : [recipe.instructions];

  return (
    <div className="recipe-details">
      <h2>{recipe.name}</h2>
      <p>Ingredients:</p>
      <ul>
        {ingredientsArray.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Instructions:</p>
      <ol>
        {instructionsArray.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.name} />}
      <div className="edit-delete-buttons">
        <button className="edit-btn" onClick={() => navigate(`/recipes/${id}/edit`)}>
          Edit Recipe
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          Delete Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
