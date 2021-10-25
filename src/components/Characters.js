import React, { useEffect, useState } from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";

const Characters = () => {
  let match = useRouteMatch();
  const [characterList, setCharacterList] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((response) => response.json())
      .then((body) => setCharacterList(body))
      .catch((error) => console.log(error));
  }, []);

  const renderCharacter = characterList.map((character, index) => {
    return (
      <li key={index}>
        <Link to={`/characters/${character.char_id}`}>{character.name}</Link>
      </li>
    );
  });

  const handleChange = (event) => {
    setSearchString(event.target.value)
    console.log(searchString)
    filter()
  }

  const filter = () => {
    let filterList = [...characterList].filter((character) => character.name.includes(searchString))
    // filterList.filter((character) => character.name.includes(searchString))
    setCharacterList(filterList)
  }

  const formSubmit = (event)  => {
    event.preventDefault()
  }

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
