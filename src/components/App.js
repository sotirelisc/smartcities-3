import React from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import ProjectCreate from './projects/ProjectCreate';
import ProjectList from './projects/ProjectList';
import Header from './Header';
import history from '../history';

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={ProjectList} />
              <Route path="/project/new" exact component={ProjectCreate} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;