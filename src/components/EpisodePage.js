import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

const EpisodePage = () => {
  let { episodeId } = useParams();
  const [epi, setEpi] = useState({});

  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/episodes/${episodeId}`)
      .then((response) => response.json())
      .then((body) => setEpi(body[0]))
      .catch((error) => console.log(error));
  }, []);


  const { title, season, episode, air_date, characters } = epi;

  console.log(epi)
  console.log(characters)

  // const renderCharacters = characters.map((character, index) => {
  //   return(
  //     <li>{character}</li>
  //   )
  // })


  return (
    <div>
      <h1>{title}</h1>
      <ul>
        <li>Season {season}, Episode {episode}</li>
        <li>Originally aired: {air_date}</li>
        <li>Featured characters:
          {/* <ul>{characters.map((character, index) => <li>{character}</li>)}</ul> */}
        </li>
      </ul>
    </div>
  );
};

export default EpisodePage;
