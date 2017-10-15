import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import {Grid, Col} from 'react-bootstrap';
import List from '../List/List';
import HomePage from '../HomePage/HomePage';

class Main extends Component {
  render() {
    return (
      <main>
        <Grid>
          <Switch>
            <Route exact path="/" component={HomePage}/>   
            <Route path="/lists" component={List} />
          </Switch>
          <Col md={2}/>
          <Col md={8}>
            <List />
          </Col>
          <Col md={2}/>
        </Grid>  
      </main>
    )
  }
}


export default Main;