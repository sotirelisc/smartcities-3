import React from 'react';
import { connect } from 'react-redux';
import {
  fetchProject,
  upvoteProject,
  downvoteProject,
  selectProject
} from '../../actions';

class ProjectShow extends React.Component {
  state = {
    voted: false
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchProject(id);
  }

  upvoteProject = id => {
    this.props.upvoteProject(id);
    this.setState({ voted: true });
  };

  downvoteProject = id => {
    this.props.downvoteProject(id);
    this.setState({ voted: true });
  };

  render() {
    console.log(this.state)
    if (!this.props.project) {
      return (
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      );
    }

    this.props.selectProject(this.props.project);
    const { _id, title, description, author, category, votes } = this.props.project;

    return (
      <div style={{ marginTop: '2rem' }}>
        <div className="ui two stackable cards">
          <div className="ui card" to="/project/show">
            <div className="content">
              <div className="right floated meta">
              <span href="#" className="ui red label mini">{category}</span>
            </div>
              <div className="card header">{title}</div>
              <div className="meta">
                {author}
              </div>
            </div>
            <div className="image">
              <img alt="" src="../parko.jpg" />
            </div>
          </div>
          <div className="ui card" to="/project/show">
            <div className="content">
              <div className="center aligned card header">Vote</div>
              <div className="center aligned meta">
                <strong>{title}</strong>by <strong>{author}</strong>
              </div>
              <div style={{ marginTop: '5rem' }} className="center aligned description">
                Would you like to see this happen?
              </div>
              <div style={{ marginTop: '1rem' }} className="extra content">
                <div className="ui two buttons">
                  <div onClick={() => this.upvoteProject(_id)} className={`ui positive button ${this.state.voted ? 'disabled' : ''}`}><i className="large thumbs up icon" /></div>
                  <div onClick={() => this.downvoteProject(_id)} className={`ui negative button ${this.state.voted ? 'disabled' : ''}`}><i className="large thumbs down icon" /></div>
                </div>
                <div className="center aligned ui huge message">
                  {votes.positive} people voted <strong>Yes</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui piled segment">
          <h4 className="ui header">Description</h4>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.projects[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, {
  fetchProject,
  upvoteProject,
  downvoteProject,
  selectProject
})(ProjectShow);