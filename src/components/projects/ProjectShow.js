import React from 'react';
import { connect } from 'react-redux';
import { fetchProject } from '../../actions';

class ProjectShow extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchProject(id);
  }

  render() {
    if (!this.props.project) {
      return (
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      );
    }

    const { title, description, author, category } = this.props.project;

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
                  <div className="ui positive button"><i className="large thumbs up icon" /></div>
                  <div className="ui negative button"><i className="large thumbs down icon" /></div>
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
    project: state.projects[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, {
  fetchProject
})(ProjectShow);