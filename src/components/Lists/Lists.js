import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import List from '../List/List';
import NewList from '../NewList/NewList';
import { Col } from 'react-bootstrap';

class Lists extends Component {
  constructor(props) {
    super (props)

    this.state = {
      lists: []
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_BASE_URL}/lists`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "jwt " + localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then((response) => {
        console.log('response: ', response);
        let lists = response.map(lists => lists);
        this.setState({ lists });
      })
      .catch((err) => { console.log('Failed!', err) });
  }

  render() {
    return(
      <div className="lists">
        <Col mdOffset={2} md={8}>  
          <Link id="task-history" to="/task-history">Task History</Link>
          {this.state.lists.map((list, index) => (
            <List
              key={index}
              title={list.title}
            />
          ))}
          <NewList />
          <Route exact path="/lists" />
        </Col>
      </div>
    )
  }
}

export default Lists;