import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ marginTop: '0.5em' }} className="ui stackable menu large">
      <Link to="/" className="item">
        <i className="home icon" />
      </Link>
      <Link to="/profile" className="item">
        <i className="user icon" />
      </Link>
      <Link to="/projects/new" className="item right">
        <div className="ui red button">
          New Project
        </div>
      </Link>
    </div>
  );
};

export default Header;