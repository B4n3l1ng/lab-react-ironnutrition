import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search({foodArray,setFoodArray}) {
    const [nameSearch, setNameSearch] = useState("")
    const handleSearch = event => {
        event.preventDefault()
        if (nameSearch.length===0){
            setFoodArray(foodArray)
        } else {
            const searchArray = [...foodArray]
            setFoodArray(searchArray.filter(element => element.name.toLowerCase().includes(nameSearch)))
            
        }
        setNameSearch("")
    }
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={nameSearch} type="text" onChange={(event) => setNameSearch((event.target.value).toLowerCase())} onInput={handleSearch}/>
    </>
  );
}

export default Search;
