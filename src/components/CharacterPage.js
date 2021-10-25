import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom';

const CharacterPage = () => {
  let { charId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/characters/${charId}`)
      .then((response) => response.json())
      .then((body) => setCharacter(body[0]))
      .catch((error) => console.log(error));
  }, []);

  const { name, img, occupation, nickname, portrayed } = character;

  return (
    <div>
      <h1>{name}</h1>
      <h2>Occupation: {occupation}</h2>
      <h3>Nickname: {nickname && nickname}</h3>
      <h3>Actor: {portrayed}</h3>
      <img src={img} alt={name} />
    </div>
  );
};

export default CharacterPage;
