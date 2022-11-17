import { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm({createFood}) {
    const [newName, setNewName] = useState("")
    const [newImage, setNewImage] = useState("")
    const [newCalories, setNewCalories] = useState(0)
    const [newServings, setNewServings] = useState(0)


    const handleName = (e) => setNewName(e.target.value);
    const handleImage = (e) => setNewImage(e.target.value);
    const handleCalories = (e) => setNewCalories(e.target.value);
    const handleServings = (e) => setNewServings(e.target.value);

    const handleSubmit = event => {
        event.preventDefault()
        let newFood={name: newName, image: newImage, calories: newCalories, servings: newServings}
        createFood(newFood)
        setNewName("")
        setNewImage("")
        setNewCalories(0)
        setNewServings(0)   
    }
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={newName} type="text" onChange={handleName} />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input value={newImage} type="text" onChange={handleImage} />

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input value= {newCalories} type="number" onChange={handleCalories} />

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input value= {newServings} type="number" onChange={handleServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;