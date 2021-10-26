import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>

        <div className="ui inverted segment ">
          <div className="ui inverted secondary pointing menu stackable">
          
            <Link to="/" className="item" style={{paddingBottom: '0', paddingTop: '0'}}>
              <img src="/logo.png" style={{width: '223px', height: '48px'}} alt="Broken Bad"></img>
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

    </div>
  );
};

export default Navbar;
