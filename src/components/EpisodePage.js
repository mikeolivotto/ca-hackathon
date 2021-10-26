import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const EpisodePage = () => {
  let { episodeId } = useParams();
  const [epi, setEpi] = useState({});

  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/episodes/${episodeId}`)
      .then((response) => response.json())
      .then((body) => setEpi(body[0]))
      .catch((error) => console.log(error));
  }, [episodeId]);


  const { title, season, episode, air_date, characters, series } = epi;
  document.title = `S${season}E${episode}: ${title} - Broken Bad`

  // const renderCharacters = characters.map((character, index) => {
  //   return(
  //     <li>{character}</li>
  //   )
  // })


  return (
    <div   className="ui container">
      <h1>{title}</h1>
      Show: {series}
      <ul>
        <li>Season {season}, Episode {episode}</li>
        <li>Originally aired: {air_date}</li>
        <li>Featured characters:
          <ul>{characters && characters.map((character, index) => <li key={index}>{character}</li>)}</ul>
        </li>
      </ul>
<p>
        <Link to="/episodes">
               {`<<`} Back to all episodes
        </Link>
</p>
    </div>
  );
};

export default EpisodePage;
