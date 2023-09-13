import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import recipeImage from '../images/food1.jpg';

const RecipeCard = ({ recipe, onDelete }) => {
 

  // const handleRsvpClick = () => {
  //   setRsvpStatus((prevStatus) => !prevStatus);
  // };

  // const handleDelete = () => {
  //   axios.delete(`http://localhost:9292/events/${event.id}`)
  //     .then(() => {
  //       onDelete(event.id); // Update the events list in the parent component after successful delete
  //     })
  //     .catch((error) => {
  //       console.error('Error deleting event:', error);
  //     });
  // };

  return (
    <div className="recipe-card">
      {/* <div className="carousel">
       
        <img src="/src/images/food1.jpg" alt="Food Type 1" />
        <img src="/src/images/food2.jpg" alt="Food Type 2" />
        <img src="/src/images/food3.jpg" alt="Food Type 3" />
      </div> */}
      <img src={recipeImage} alt="Oscars" />
      <h2>{recipe.name}</h2>
      <p>{recipe.ingredients}</p>
      <p>{recipe.instructions}</p>

      <Link to={`/recipes/${recipe.id}`} className="view-details-btn">View Details</Link>
     
    </div>
  );
};

export default RecipeCard;
