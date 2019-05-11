import React from 'react';
import { connect } from 'react-redux';
import IdeaRow from '../ideas/IdeaRow';
import ProjectRow from './ProjectRow';
import { fetchProjects, fetchIdeas } from '../../actions';

class ProjectList extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
    this.props.fetchIdeas();
  }

  renderIdeasList() {
    if (this.props.ideas) {
      return this.props.ideas.map(idea => {
        return (
          <IdeaRow
            id={idea._id}
            key={idea._id}
            title={idea.title}
            description={idea.description}
            author={idea.author}
            category={idea.category}
          />
        );
      });
    }
    return 'Loading';
  }

  renderList() {
    if (this.props.projects) {
      return this.props.projects.map(project => {
        return (
          <ProjectRow
            id={project._id}
            key={project._id}
            title={project.title}
            description={project.description}
            author={project.author}
            category={project.category}
          />
        );
      });
    }
    return 'Loading';
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h2 style={{ marginTop: '2em' }}>Ideas by Citizens</h2>
          Tell us your opinion
          <div style={{ marginTop: '0.5em' }} className="ui four stackable cards">
            {this.renderIdeasList()}
          </div>
        </div>
        <div className="container">
          <h2 style={{ marginTop: '3em' }}>Ideas by Municipality</h2>
          Vote on projects
          <div style={{ marginTop: '0.5em' }} className="ui three stackable cards">
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
    ideas: Object.values(state.ideas),
  };
};

export default connect(mapStateToProps, {
  fetchProjects,
  fetchIdeas
})(ProjectList);