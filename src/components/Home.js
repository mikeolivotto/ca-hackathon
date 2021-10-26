import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const bbGreen = {
    color: 'rgb(72, 127, 90)'
  }

  return (
    <div  className="ui container">
        <h1>A React-based app for everything <span style={bbGreen}>Breaking Bad</span></h1>
        <p>by Ahmet Erturk & Mike Olivotto</p>
        <h2>Features</h2>
        <ul>
          <li>
          <Link to="/characters">Browse characters</Link> from Breaking Bad and Better Call Saul
            <ul>
              <li>Search function to quickly locate specific character</li>
              <li>Click through on any character for more comprehensive details about the character</li>
            </ul>
          </li>
          <li><Link to="/episodes">Browse all episodes</Link> of Breaking Bad</li>
          <ul>
              <li>Chronologically listed</li>
              <li>Click through for further details about the episode</li>
            </ul>
          <li><Link to="/quotes">Get random quotes</Link></li>
        </ul>
        <h2>About the app</h2>
        <ul>
          <li>Built with <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a>
            <ul>
              <li>Additional dependency: <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">React Router</a> for routing component views</li>
            </ul>
          </li>
          <li>CSS Framework: <a href="https://semantic-ui.com/" target="_blank" rel="noreferrer">SemanticUI</a></li>
          <li>Data sourced from <a href="https://breakingbadapi.com/" target="_blank" rel="noreferrer">Breaking Bad API</a></li>
          <li>Logo created with <a href="https://fontspool.com/generator/breaking-bad-font" target="_blank" rel="noreferrer">Fonts Pool</a></li>
        </ul>

    </div>
  )
};

export default Home;
