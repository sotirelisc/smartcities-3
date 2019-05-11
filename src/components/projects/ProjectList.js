import React from 'react';
import ProjectRow from './ProjectRow';

class ProjectList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h2 style={{ marginTop: '2em' }}>Ideas by Citizens</h2>
          <div className="ui four stackable cards">
            <ProjectRow />
            <ProjectRow />
            <ProjectRow />
            <ProjectRow />
          </div>
        </div>
        <div className="container">
          <h2 style={{ marginTop: '2em' }}>Ideas by Municipality</h2>
          <div className="ui four stackable cards">
            <ProjectRow />
            <ProjectRow />
            <ProjectRow />
            <ProjectRow />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectList;