import React from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import ProjectCreate from './projects/ProjectCreate';
import ProjectList from './projects/ProjectList';
import ProjectShow from './projects/ProjectShow';
import IdeaShow from './ideas/IdeaShow';
import IdeaCreate from './ideas/IdeaCreate';
import UserProfile from './users/UserProfile';
import Header from './Header';
import history from '../history';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="ui container main-view">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={ProjectList} />
              <Route path="/projects/new" exact component={ProjectCreate} />
              <Route path="/projects/:id" exact component={ProjectShow} />
              <Route path="/profile" exact component={UserProfile} />
              <Route path="/ideas/new" exact component={IdeaCreate} />
              <Route path="/ideas/:id" exact component={IdeaShow} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;