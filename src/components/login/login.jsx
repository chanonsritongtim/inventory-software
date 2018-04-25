import React from 'react';
import { Container, Button, Grid, GridColumn, Form, FormInput, Segment, Header } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import db from '../../db/db';

const style = {
  marginTop: {
    marginTop: '1em'
  }
}

export default class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      name: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, {name, value}) {
    this.setState({
      [name]: value
    })
  }

  handleSubmit() {
    const {name, password} = this.state;
    this.setState({
      userId: name,
      pwd: password
    }, () => {
      // db.table("users").add({
      //   userId: this.state.userId,
      //   pwd: this.state.pwd
      // })

      db.table("users").where(["userId", "pwd"]).equals([this.state.userId, this.state.pwd]).first(user => {
        const {from} = {
          from: {
            pathname: "/workspace"
          }
        };
        console.log("Redirect");
        return <Redirect to={from} />
      })
    })
  }

  render() {
    const {name, password} = this.state

    return (
      <div>
        <Container style={ style.marginTop }>
          <Grid>
            <GridColumn textAlign="center">
              <Header>Welcome to Inventory React App !</Header>
              <Form onSubmit={ this.handleSubmit }>
                <Segment stacked>
                  <FormInput fluid icon="user" iconPosition="left" placeholder="Username" name='name' value={ name } onChange={ this.handleChange } />
                  <FormInput fluid icon="lock" iconPosition="left" placeholder="Password" name='password' value={ password } onChange={ this.handleChange } type="password"
                  />
                  <Button fluid color="blue" onClick={ this.testFunction }>Confirm</Button>
                </Segment>
              </Form>
            </GridColumn>
          </Grid>
        </Container>
      </div>
      );
  }
}