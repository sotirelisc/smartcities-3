import React from 'react';
import { Link } from 'react-router-dom';

class IdeaRow extends React.Component {
  render() {
    return (
      <Link style={{ color: 'black' }} className="ui card" to={`/ideas/${this.props.id}`}>
        <div className="content">
          <img alt="" className="ui avatar image" src="https://semantic-ui.com/images/avatar/large/elliot.jpg" /> {this.props.author}
        </div>
        <div className="content">
          <strong>{this.props.title}</strong>
        </div>
        <div className="extra content">
          {this.props.description}...
        </div>
      </Link>
    );
  }
}

export default IdeaRow;