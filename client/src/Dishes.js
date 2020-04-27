import React, { useState } from 'react'
import Form from './Form'


function Dishes(props) {

    const [recipes, setRecipes] = useState([])

    // get recipe
    const getRecipe = (e) => {
        fetch('http://localhost:2000/recipes/' + e.target.value)
            .then(data => data.json())
            .then(result => setRecipes(result))
    }

    return (
        <div>
            <div id="dish">
                <h1>Select Your Dish</h1>
                <select id="dish-select">
                    <option value="0" disabled>Select Dish</option>
                    {props.dishes.map((dish, i) => (
                        <option key={i} value={dish.id} onClick={getRecipe}>{dish.name}</option>
                    ))}
                </select>
            </div>
            <div>
                {recipes.map(recipe => (
                    <div className="recepies">
                        <h1>{recipe.r_name}</h1>
                        <h2>{recipe.ingredients}</h2>
                        <h3>{recipe.preparation}</h3>
                    </div>
                ))}
                <div>
                    {/* if there is no chosen dish so display recipe off */}
                    {recipes.length ? (<Form recipes={recipes} />) : null}
                    
                </div>
            </div>

        </div>
    )
}

export default Dishes

