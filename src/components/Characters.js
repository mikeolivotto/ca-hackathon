import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

const Characters = () => {

  document.title = "Characters - Broken Bad"

  const [characterList, setCharacterList] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters")
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

  // const renderCharacter = filterCharacter.map((character, index) => {
  //   return (
  //     <li key={index}>
  //       <Link to={`/characters/${character.char_id}`}>{character.name}</Link>
  //     </li>
  //   );
  // });

  const cardsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "30px",
    // padding: '20px',
    // width: '100%',
    // height: '40vw',
    // objectFit: 'cover',
  };

  // const cardsGroup = {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   flexWrap: 'wrap'
  // }

  const renderCharacter = filterCharacter.map((character, index) => {
    return (
      <CharacterCard
        key={index}
        link={`/characters/${character.char_id}`}
        character={character}
      />
    );
  });

  return (
    <div>
      <div className="ui container">
        <h1>Characters</h1>
        <form onSubmit={formSubmit}>
          <label>
            Filter:
          </label>
            <input type="text" name="search" placeholder="eg. Jesse" onChange={handleChange} style={{marginLeft: '10px'}} />
        </form>
      </div>

      <div style={cardsContainer}>{renderCharacter}</div>
    </div>
  );
};

export default Characters;
