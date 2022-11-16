import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search({foodArray,setFoodArray}) {
    const [nameSearch, setNameSearch] = useState("")
    const handleSearch = (event) => {
        setNameSearch(event.target.value.toLowerCase())
        event.preventDefault()
        const searchArray = [...foodArray]
        setFoodArray(searchArray.filter(element => element.name.toLowerCase().includes(nameSearch)))
    }
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={nameSearch} type="text" onChange={(event) => handleSearch(event)} />
    </>
  );
}

export default Search;
