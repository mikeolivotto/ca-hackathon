import React, { useEffect, useState } from 'react';
import {
  useParams, Link
} from 'react-router-dom';

const CharacterPage = () => {
  let { charId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/characters/${charId}`)
      .then((response) => response.json())
      .then((body) => setCharacter(body[0]))
      .catch((error) => console.log(error));
  }, [charId]);

  const { name, birthday, img, occupation, nickname, portrayed, appearance, better_call_saul_appearance } = character;

  return (
    <div  className="ui container">
      <h1>{name}</h1>
      <ul>
        <li><b>Also known as:</b> {nickname}</li>
        <li><b>D.O.B.:</b> {birthday}</li>
        <li><b>Occupation:</b> {occupation && occupation.join(", ")}</li>
        <li><b>Breaking Bad season(s):</b> {appearance && appearance.join(", ")}</li>
        <li><b>Better Call Saul season(s): </b>{better_call_saul_appearance && better_call_saul_appearance.join(" , ")}</li>
        <li><b>Actor:</b> {portrayed}</li>
      </ul>
      <img src={img} alt={name} style={{maxHeight: '300px'}} />
      <p>
        <Link to="/characters">
            {`<<`} Back to all characters
        </Link>
      </p>
    </div>

  );
};

export default CharacterPage;
