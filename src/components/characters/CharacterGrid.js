import React from 'react';
import CharacterItem from './CharacterItem';
import Loading from '../UI/Loading';

const CharacterGrid = ({ items, isLoading}) => {
  return isLoading
    ? (<Loading />)
    : (<section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>)
}

export default CharacterGrid;
