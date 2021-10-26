import React from 'react';
import Navbar from './components/partials/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Episodes from './components/Episodes';
import Characters from './components/Characters';
import Quotes from './components/Quotes';
import CharacterPage from './components/CharacterPage';
import EpisodePage from './components/EpisodePage';

const App = () => {
  return (
    <div>
      <Router>
        
      <Navbar />

        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/characters">
              <Characters />
            </Route>
            <Route exact path="/episodes">
              <Episodes />
            </Route>
            <Route exact path="/quotes">
              <Quotes />
            </Route>
            <Route path="/characters/:charId">
              <CharacterPage />
            </Route>
            <Route path="/episodes/:episodeId">
              <EpisodePage />
            </Route>
          </Switch>
      </Router>
    </div>
  );
};

export default App;
