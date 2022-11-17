import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search({filteredItems}) {
  const [query, setQuery] = useState('');
    const handleChange = (event) => {
        event.preventDefault()
        setQuery(event.target.value)
        filteredItems(event.target.value)
    }
  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input value={query} type="text" onChange={handleChange} />
    </>
  );
}

export default Search;
