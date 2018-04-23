import React from 'react';
import { Button, Grid, GridColumn, Form, FormInput, Segment } from 'semantic-ui-react';
import db from '../../db';

export default class Login extends React.Component {

  state = {
    name: '',
    password: ''
  }

  handleChange = (e, {name, value}) => this.setState({
    [name]: value
  })

  handleSubmit = () => {
    const {name, password} = this.state;
    this.setState({
      submittedName: name,
      submiitedPasswod: password
    })
  }

  render() {
    const {name, password} = this.state

    return (
      <div>
        <Grid>
          <GridColumn textAlign="center">
            <Form onSubmit={ this.handleSubmit }>
              <Segment stacked>
                <FormInput fluid icon="user" iconPosition="left" placeholder="Username" name='name' value={ name } onChange={ this.handleChange } />
                <FormInput fluid icon="lock" iconPosition="left" placeholder="Password" name='password' value={ password } onChange={ this.handleChange } />
              </Segment>
              <Button primary onClick={ this.testFunction }>Confirm</Button>
            </Form>
          </GridColumn>
        </Grid>
      </div>
      );
  }
}