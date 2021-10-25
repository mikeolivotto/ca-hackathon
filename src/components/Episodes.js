import React, {useEffect, useState} from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';


const Episodes = () => {
  let match = useRouteMatch();
  const [episodeList, setEpisodeList] = useState([]);

  useEffect(() => {
    fetch('https://www.breakingbadapi.com/api/episodes')
      .then((response) => response.json())
      .then((body) => setEpisodeList(body))
      .catch((error) => console.log(error));
  }, []);

  const renderEpisode = episodeList.map((episode, index) => {
    return (
      <li key={index}>
        <Link to={`/episodes/${episode.episode_id}`}>Season {episode.season}, Episode {episode.episode}: {episode.title}</Link>
      </li>
    );
  });

  return (
    <div>
      <h1>Episode</h1>

      <ul>{renderEpisode}</ul>
    </div>
  );
};

export default Episodes;
