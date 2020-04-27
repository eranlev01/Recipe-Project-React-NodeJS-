import React, { useEffect, useState } from 'react';
import './App.css';
import Dishes from './Dishes';



function App() {

  const [dishes, setDishes] = useState([])

  useEffect(() => {
    getDishes()
  }, [])

  // Get all dishes from server
  const getDishes = () => {
    fetch('http://localhost:2000/dishes')
      .then(data => data.json())
      .then(result => setDishes(result))
  }

  return (
    <div className="App">
      <Dishes dishes={dishes} />
    </div>
  );
}

export default App;
