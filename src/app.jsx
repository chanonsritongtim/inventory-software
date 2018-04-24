import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Login from './components/login/login';
import Workspace from './components/workspace/workspace';

export default class App extends React.Component {
  constructor() {
    super()
  }
  // changeRouter(target) {
  //   this.context.router.pzush("/" + target);
  // }

  render() {
    return (
      // <Router>
      //   <div>
      //     <Link to="/">
      //     <Button color="red">Login</Button>
      //     </Link>
      //     <Link to="/workspace">
      //     <Button color="green">Workspace</Button>
      //     </Link>
      //     <Switch>
      //       <Route exact path="/" component={ Login } />
      //       <Route exact path="/workspace" component={ Workspace } />
      //     </Switch>
      //   </div>
      // </Router>
      <div>
        <Login />
        <Workspace />
      </div>

      );
  }
}
