import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ marginTop: '2px' }} className="ui secondary pointing menu">
      <Link to="/" className="item">
        decit
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Projects
        </Link>
      </div>
    </div>
  );
};

export default Header;