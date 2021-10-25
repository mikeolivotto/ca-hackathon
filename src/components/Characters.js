import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import CharacterPage from './CharacterPage';

const Characters = () => {
  let match = useRouteMatch();
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch('https://www.breakingbadapi.com/api/characters')
      .then((response) => response.json())
      .then((body) => setCharacterList(body))
      .catch((error) => console.log(error));
  }, []);

  console.log(characterList);

  const renderCharacter = characterList.map((character, index) => {
    return (
      <li key={index}>
        <Link to={`/characters/${character.char_id}`}>{character.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <h1>Characters</h1>

      <ul>{renderCharacter}</ul>
    </div>
  );
};

export default Characters;
