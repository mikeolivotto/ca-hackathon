import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home';
import Episodes from '../Episodes';
import Characters from '../Characters';
import Quotes from '../Quotes';
import CharacterPage from '../CharacterPage';
import EpisodePage from '../EpisodePage';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <Router>
        <div className="ui inverted segment">
          <div className="ui inverted secondary pointing menu">
            <Link to="/" className="item">
              Home
            </Link>
            <Link to="/characters" className="item">
              Characters
            </Link>
            <Link to="/episodes" className="item">
              Episodes
            </Link>
            <Link to="/quotes" className="item">
              Quotes
            </Link>
          </div>
        </div>

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

export default Navbar;
