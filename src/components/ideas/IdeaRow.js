import React from 'react';
import { Link } from 'react-router-dom';

class IdeaRow extends React.Component {
  render() {
    return (
      <Link style={{ color: 'black' }} className="ui card" to="/projects/show">
        <div className="content">
          <img alt="" className="ui avatar image" src="https://semantic-ui.com/images/avatar/large/elliot.jpg" /> Christos
        </div>
        <div className="content">
          New parko
        </div>
      </Link>
    );
  }
}

export default IdeaRow;