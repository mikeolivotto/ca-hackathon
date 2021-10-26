import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  const { link, character } = props;
  // console.log(character);

  const imageSize = {
    width: '100%',
    height: '350px',
    objectFit: 'cover',
    // height: '40vw',
    // objectFit: 'cover',
  };

  const cardStyle = {
    margin: '10px',
  };

  return (
    <>
      <Link to={`/characters/${character.char_id}`}>
        <div className="ui card" style={cardStyle}>
          <div className="image">
            <img style={imageSize} src={character.img} />
          </div>
          <div className="content">
            <p className="header">{character.name}</p>
            <div className="description">
              <strong>Nickname:</strong> {character.nickname}
            </div>
            <div className="description">
              <strong>Occupation:</strong> {character.occupation.join(', ')}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CharacterCard;
