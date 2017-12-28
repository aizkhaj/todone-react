import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {Grid} from 'react-bootstrap';
import Lists from '../Lists/Lists';
import HomePage from '../HomePage/HomePage';
import TaskHistory from '../TaskHistory/TaskHistory';
import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';
import './Main.css';

class Main extends Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    
    // const PrivateRoute = ({ component: Component, ...rest }) => (
    //   <Route {...rest} render={props => (
    //     isLoggedIn 
    //     ? <Lists {...this.props}/>
    //     : <Redirect to="/signin"/>
    //   )}/>
    // );
    
    return (
      <main>
        <Grid>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/signin" render={props => <Login {...this.props}/>}/>   
            {/* <PrivateRoute/> */}
            <Route path="/lists" render={() => (
              isLoggedIn
              ? <Lists {...this.props}/>
              : <Redirect to="/signin"/>
            )} />
            <Route path="/task-history" component={TaskHistory}/>
            <Route path="/register" render={props => <Register {...this.props}/>}/>
          </Switch>
        </Grid>  
      </main>
    )
  }
}


export default Main;