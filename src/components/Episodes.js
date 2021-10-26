import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


const Episodes = () => {
  // let match = useRouteMatch();
  document.title = "Episodes - Broken Bad"
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
        <Link to={`/episodes/${episode.episode_id}`}>{`${episode.series} - S${episode.season}E${episode.episode}: ${episode.title}`}</Link>
      </li>
    );
  });

  return (
    <div className="ui container">
      <h1>Episode List</h1>

      <ul>{renderEpisode}</ul>
    </div>
  );
};

export default Episodes;
