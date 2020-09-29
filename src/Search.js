import React, { useState } from 'react';
import { DB } from './bd';

export const Search = () =>{
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return(
    <div>
    <div>
      <input onChange={handleSearchChange}/>
    </div>
    {
      DB
      .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      .map((item) => {
        return <div>{item.name}</div>
      })
    }
    </div>

  )
}
