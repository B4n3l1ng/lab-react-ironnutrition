import { useState } from 'react';
import { Divider, Input } from 'antd';
import {v4 as uuidv4} from "uuid"

// Iteration 4
function AddFoodForm({foodArray, setFoodArray}) {
    const [newName, setNewName] = useState("")
    const [newImage, setNewImage] = useState("")
    const [newCalories, setNewCalories] = useState(0)
    const [newServings, setNewServings] = useState(0)

    const handleSubmit = event => {
        event.preventDefault()
        setFoodArray([...foodArray, 
            { id: uuidv4(), 
                name: newName, 
                image: newImage, 
                calories: newCalories,
                 servings: newServings,
                },
            ])
        setNewName("")
        setNewImage("")
        setNewCalories(0)
        setNewServings(0)   
    }
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={newName} type="text" onChange={(event) => setNewName(event.target.value)} />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input value={newImage} type="text" onChange={(event) => setNewImage(event.target.value)} />

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input value= {newCalories} type="number" onChange={(event) => setNewCalories(parseInt(event.target.value))} />

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input value= {newServings} type="number" onChange={(event) => setNewServings(parseInt(event.target.value))} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;