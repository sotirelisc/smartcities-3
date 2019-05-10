import React from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../actions';
import ProjectForm from './ProjectForm';

class ProjectCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createProject(formValues);
  }

  render() {
    return (
      <div>
        <h3>Create a Project</h3>
        <ProjectForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

export default connect(
  mapStateToProps,
  { createProject }
)(ProjectCreate);