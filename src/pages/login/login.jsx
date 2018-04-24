import React from 'react';
import { Container, Button, Grid, GridColumn, Form, FormInput, Segment, Header } from 'semantic-ui-react';
import db from '../../db';

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
    console.log('inside handleChange')
    this.setState({
      [name]: value
    })
  }

  handleSubmit() {
    const {name, password} = this.state;
    this.setState({
      submittedName: name,
      submiitedPasswod: password
    })
    db.table('users').add(this.state);
    console.log('State ja => ' + JSON.stringify(this.state))
  }

  render() {
    const {name, password} = this.state

    return (
      <div>
        <Container>
          <Grid>
            <GridColumn textAlign="center">
              <Header>Welcome to Inventory React App !</Header>
              <Form onSubmit={ this.handleSubmit }>
                <Segment stacked>
                  <FormInput fluid icon="user" iconPosition="left" placeholder="Username" name='name' value={ name } onChange={ this.handleChange } />
                  <FormInput fluid icon="lock" iconPosition="left" placeholder="Password" name='password' value={ password } onChange={ this.handleChange } />
                </Segment>
                <Button color="blue" onClick={ this.testFunction }>Confirm</Button>
                <Button color="red" onClick={ this.testFunction }>Clear</Button>
              </Form>
            </GridColumn>
          </Grid>
        </Container>
      </div>
      );
  }
}