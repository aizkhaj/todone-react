import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import {Grid} from 'react-bootstrap';
import List from '../List/List';
import HomePage from '../HomePage/HomePage';
import TaskHistory from '../TaskHistory/TaskHistory';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <main>
        <Grid>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/signin" component={Login}/>   
            <Route path="/lists" component={List}/>
            <Route path="/task-history" component={TaskHistory}/>
            <Route path="/register" component={Register}/>
          </Switch>
        </Grid>  
      </main>
    )
  }
}


export default Main;