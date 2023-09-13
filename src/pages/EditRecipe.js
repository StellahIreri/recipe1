import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({
    
    name: '',
  ingredients: '', // Change to string
  instructions: '', // Change to string 
  });

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

  const handleEditRecipe = () => {
    axios
      .put(`http://127.0.0.1:4000/recipes/${id}`, recipe)
      .then((response) => {
        navigate(`/recipes/${id}`);
      })
      .catch((error) => {
        console.error('Error updating recipe:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Handle ingredients and instructions separately
    if (name === 'ingredients' || name === 'instructions') {
      setRecipe((prevRecipe) => ({
        ...prevRecipe,
        [name]: value.split('\n'), 
      }));
    } else {
      setRecipe({ ...recipe, [name]: value });
    }
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-recipe">
      <h2>Edit Recipe</h2>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={recipe.name}
        onChange={handleInputChange}
        className="edit-recipe-input"
      />

      <label>Ingredients:</label>
      <textarea
        name="ingredients"
        value={recipe.ingredients}
        onChange={handleInputChange}
        className="edit-recipe-input"
      />

      <label>Instructions:</label>
      <textarea
        name="instructions"
        value={recipe.instructions}
        onChange={handleInputChange}
        className="edit-recipe-input"
      />

      <button onClick={handleEditRecipe}>Save</button>
      <Link to={`/recipes/${id}`} className="cancel-btn">
        Cancel
      </Link>
    </div>
  );
};

export default EditRecipe;
