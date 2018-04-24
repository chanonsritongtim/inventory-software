import React from 'react';
import { Header } from 'semantic-ui-react';

export default class Workspace extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
              <Header as="h3">TestHeader</Header>
            </div>
            );
    }
}