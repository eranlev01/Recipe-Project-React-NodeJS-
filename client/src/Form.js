import React, { useState } from 'react'

const Form = (props) => {

    const [user, setUser] = useState('')
    const [r_name, setR_name] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [preparation, setPreparation] = useState('')
    const [d_id, setD_id] = useState(props.recipes[0].d_id)

    // Add Recipe
    const addRecipe = async (e) => {
        e.preventDefault()
        console.log(props.recipes[0].d_id);
        console.log(d_id, user, r_name, ingredients, preparation);
        const data = await fetch('http://localhost:2000/recipes',{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({d_id, user, r_name, ingredients, preparation}),   
        })
        if(data.ok){
            console.log('sec');
        }
        
    }

    return (
        <div>
            <div id="form-div">
                <h1>Add a New Recipe</h1>
                <form className="form" onSubmit={addRecipe}>
                    <input type="text" placeholder="Enter Your Name" onChange={e => setUser(e.target.value)} />
                    <input type="text" placeholder="Enter Recipe Name" onChange={e => setR_name(e.target.value)} />
                    <input type="text" placeholder="Enter Grocery" onChange={e => setIngredients(e.target.value)} />
                    <textarea placeholder="Enter Preparation" onChange={e => setPreparation(e.target.value)} />
                    <input type="submit" value="Add Recipe" className="btn"/>
                </form>
            </div>
        </div>
    )
}

export default Form
