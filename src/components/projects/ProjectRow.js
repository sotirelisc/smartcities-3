import React from 'react';
import { Link } from 'react-router-dom';

class ProjectRow extends React.Component {
  render() {
    return (
      <Link className="ui card" to={`/projects/${this.props.id}`}>
        <div className="content">
          <div className="right floated meta">
            <span href="#" className="ui red label mini">{this.props.category}</span>
          </div>
          <div className="card header">{this.props.title}</div>
          <div className="meta">
            {this.props.author}
          </div>
        </div>
        <div className="image">
          <img alt="" src="../parko.jpg" />
        </div>
      </Link>
    );
  }
}

export default ProjectRow;