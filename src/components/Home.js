import React from 'react';

const Home = () => {
  return (
    <>
      <h1>A React-based app for everything Breaking Bad</h1>
      <h2>Features</h2>
      <ul>
        <li>
          Browse characters from Breaking Bad and Better Call Saul
          <ul>
            <li>Search function to quickly locate specific character</li>
            <li>Click through on any character for more comprehensive details about the character</li>
          </ul>
        </li>
        <li>View a list of all Breaking Bad episodes</li>
        <ul>
            <li>Chronologically listed</li>
            <li>Click through for further details about the episode</li>
          </ul>
        <li>Get random quotes</li>
      </ul>

      <h2>About the app</h2>
      <ul>
        <li>Built with React
          <ul>
            <li>Additional dependency: React Router DOM for routing component views</li>
          </ul>
        </li>    
        <li>CSS Framework: <a href="https://semantic-ui.com/" target="_blank" rel="noreferrer">SemanticUI</a></li>      
        <li>Data sourced from <a href="https://breakingbadapi.com/" target="_blank" rel="noreferrer">Breaking Bad API</a></li> 
        <li>Logo created with <a href="https://fontspool.com/generator/breaking-bad-font" target="_blank" rel="noreferrer">Fonts Pool</a></li> 
      </ul>

      <p>Built by Ahmet Erturk & Mike Olivotto</p>


    </>
  )
};

export default Home;
