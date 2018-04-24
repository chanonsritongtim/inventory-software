import React from 'react';
import Login from './components/login/login';
import Workspace from './components/workspace/workspace';

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
    if (this.state.currentUser) {
      return (
        <Workspace />
        );
    }
    return (
      <Login />
    )
  }
}

export default App;
