import React from 'react';
import { Link } from 'react-router-dom';

class ProjectRow extends React.Component {
  render() {
    return (
      <Link className="ui card" to="/projects/show">
        <div className="content">
          <div className="card header">Parko</div>
          <div class="meta">
            Dimos Kavalas
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