import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ marginTop: '2px' }} className="ui stackable menu large">
      <Link to="/" className="item">
        decit
      </Link>
      <Link to="/" className="item active">
        Home
      </Link>
      <Link to="/project/new" className="item right">
        <div className="ui red button">
          <i className="plus icon"></i>New
        </div>
      </Link>
    </div>
  );
};

export default Header;