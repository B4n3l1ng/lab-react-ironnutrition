import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodArray, setFoodArray] = useState(foods);
  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm foodArray={foodArray} setFoodArray={setFoodArray} />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foodArray.map((food) => (
          <div key={uuidv4()}>
            <FoodBox food={food} />
          </div>
        ))}
      </Row>
    </div>
  );
}

export default App;
