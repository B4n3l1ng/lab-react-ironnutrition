import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FoodBox from './components/FoodBox';

function App() {
  const [foodArray, setFoodArray] = useState(foods);
  return (
    <div className="App">
      {foodArray.map((food) => (
        <div key={uuidv4()}>
          <p> {food.name} </p>
          <img src={food.image} width={100} />
        </div>
      ))}
      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />
    </div>
  );
}

export default App;
