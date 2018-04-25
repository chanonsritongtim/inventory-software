import React from 'react';
import Login from './components/login/login';
import Workspace from './components/workspace/workspace';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


const PrivateRoute = ({component:Component, ...rest}) => (
  <Route {...rest} render={ props => auth.isAuthenticated ? (
                          <Component {...props} />
                          ) : (
                          <Redirect to={ { pathname: "/login", state: { from: props.location } } } />
                          ) } />
)

const auth = {
  isAuthenticated: true
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: ''
    }
  }
  // changeRouter(target) {
  //   this.context.router.pzush("/" + target);
  // 

  componentDidMount() {
    window.localStorage.setItem("currentUser", "chanon");
    this.setState({
      currentUser: window.localStorage.getItem("currentUser")
    })
  }

  render() {
    console.log(JSON.stringify(this.state));
    // if (this.state.currentUser) {
    //   return (
    //     <Login />
    //     );
    // }
    // return (
    //   <Login />
    // )
    return (
      <Router>
        <div>
          <Link to="/login">
          <Button>login</Button>
          </Link>
          <Link to="/workspace">
          <Button>workspace</Button>
          </Link>
          <Route path="/login" component={ Login } />
          <PrivateRoute path="/workspace" component={ Workspace } />
        </div>
      </Router>
    )
  }
}

export default App;
