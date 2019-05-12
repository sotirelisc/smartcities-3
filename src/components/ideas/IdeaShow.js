import React from 'react';
import { connect } from 'react-redux';
import {
  fetchIdea
} from '../../actions';
import CommentSection from './CommentSection';

class IdeaShow extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchIdea(id);
  }

  render() {
    if (!this.props.idea) {
      return (
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      );
    }

    const { title, description, author, category } = this.props.idea;

    return (
      <div style={{ marginTop: '2rem' }}>
        <div className="ui two stackable cards">
          <div className="ui card" to="/project/show">
            <div className="content">
              <div className="right floated meta">
                <span href="#" className="ui red label mini">{category}</span>
              </div>
            </div>
            <div className="content">
              <div className="card header">{title}</div>
              <div className="meta">
                {author}
              </div>
            </div>
          </div>
        </div>
        <div className="ui piled segment">
          <h4 className="ui header">Description</h4>
          <p>{description}</p>
        </div>
        <CommentSection />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    idea: state.ideas[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, {
  fetchIdea,
})(IdeaShow);