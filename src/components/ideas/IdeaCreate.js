import React from 'react';
import { connect } from 'react-redux';
import { createIdea } from '../../actions';
import IdeaForm from './IdeaForm';

class IdeaCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createIdea(formValues);
  }

  render() {
    return (
      <div>
        <h3>Propose an Idea</h3>
        Would you like something built in your city? Tell us more!
        <IdeaForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { createIdea }
)(IdeaCreate);