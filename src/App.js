import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [foodArray, setFoodArray] = useState(
    foods.map((currentFood) => ({ ...currentFood, tempId: uuidv4() }))
  );
  const [showFood, setShowFood] = useState(
    foods.map((currentFood) => ({ ...currentFood, tempId: uuidv4() }))
  );
  const [show, setShow] = useState(true);

  const createFood = (food) => {
    const newFoods = [food, ...foodArray];
    setFoodArray(newFoods);
    setShowFood(newFoods);
  };

  const filteredItems = (searchQuery) => {
    let filtItems = foodArray.filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setShowFood(filtItems);
  };

  const deleteFood = (tempId) => {
    const filtItens = foodArray.filter((food) => food.tempId !== tempId);
    setFoodArray(filtItens);
    setShowFood(filtItens);
  };

  const toggleVisibility = () => {
    setShow(!show);
  };
  return (
    <div className="App">
      {/* Display Add Food component here */}
      {show && <AddFoodForm createFood={createFood} />}
      <Button onClick={toggleVisibility} style={{ margin: '10px' }}>
        {show ? 'Hide Form' : 'Add New Food'}
      </Button>

      {/* Display Search component here */}
      <Search filteredItems={filteredItems} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {showFood.length ? (
          showFood.map((food) => {
            return (
              <div>
                <FoodBox
                  key={food.tempId}
                  food={food}
                  deleteFood={deleteFood}
                />
              </div>
            );
          })
        ) : (
          <div>
            <h3>Oops! There is no more content to show!</h3>
            <img
              src="https://img.freepik.com/free-vector/red-prohibited-sign-no-icon-warning-stop-symbol-safety-danger-isolated-vector-illustration_56104-912.jpg?w=2000"
              alt=""
              width="300"
            />
          </div>
        )}
      </Row>
    </div>
  );
}

export default App;
