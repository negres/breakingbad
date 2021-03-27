import { getSuggestedQuery } from '@testing-library/dom';
import React, { useState } from 'react'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  const handleSearch = (query) => {
    setText(query);
    getQuery(query);
  }

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          onChange={(event) => handleSearch(event.target.value)}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Search
