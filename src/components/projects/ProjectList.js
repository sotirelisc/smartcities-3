import React from 'react';
import { connect } from 'react-redux';
import IdeaRow from '../ideas/IdeaRow';
import ProjectRow from './ProjectRow';
import { fetchProjects } from '../../actions';

class ProjectList extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  renderList() {
    if (this.props.projects) {
      return this.props.projects.map(project => {
        return (
          <ProjectRow
            key={project._id}
            title={project.title}
            description={project.description}
            author={project.author}
          />
        );
      });
    }
    return 'Loading';
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="container">
          <h2 style={{ marginTop: '2em' }}>Ideas by Citizens</h2>
          Tell us your opinion
          <div style={{ marginTop: '0.5em' }} className="ui four stackable cards">
            <IdeaRow />
            <IdeaRow />
            <IdeaRow />
            <IdeaRow />
          </div>
        </div>
        <div className="container">
          <h2 style={{ marginTop: '3em' }}>Ideas by Municipality</h2>
          Vote on projects
          <div style={{ marginTop: '0.5em' }} className="ui four stackable cards">
            {this.renderList()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: Object.values(state.projects),
  };
};

export default connect(mapStateToProps, {
  fetchProjects
})(ProjectList);