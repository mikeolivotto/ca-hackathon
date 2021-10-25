import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';

const Characters = () => {
  let match = useRouteMatch();
  const [characterList, setCharacterList] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    fetch('https://www.breakingbadapi.com/api/characters')
      .then((response) => response.json())
      .then((body) => setCharacterList(body))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event) => {
    setSearchString(event.target.value);
    console.log(searchString);
  };

  const formSubmit = (event) => {
    event.preventDefault();
  };

  const filterCharacter = characterList.filter((char) => {
    return char.name.toLowerCase().includes(searchString.toLowerCase());
  });

  const renderCharacter = filterCharacter.map((character, index) => {
    return (
      <li key={index}>
        <Link to={`/characters/${character.char_id}`}>{character.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <h1>Characters</h1>

      <form onSubmit={formSubmit}>
        <label>
          Search:
          <input type="text" name="search" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <ul>{renderCharacter}</ul>
    </div>
  );
};

export default Characters;
