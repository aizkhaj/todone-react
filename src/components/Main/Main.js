import React, {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import {Grid, Col} from 'react-bootstrap';
import List from '../List/List';
import HomePage from '../HomePage/HomePage';
import NewList from '../NewList/NewList';
import TaskHistory from '../TaskHistory/TaskHistory';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <main>
        <Grid>
          <Switch>
            <Route exact path="/" component={HomePage}/>   
            <Route path="/lists" component={List} />
            <Route path="/task-history" component={TaskHistory} />
          </Switch>
          <Col md={2}/>
          <Col md={8}>
            <Link id="task-history" to="/task-history">Task History</Link>
            <List />
            <NewList />
          </Col>
          <Col md={2}/>
        </Grid>  
      </main>
    )
  }
}


export default Main;