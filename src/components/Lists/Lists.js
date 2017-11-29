import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import List from '../List/List';
// import NewList from '../NewList/NewList';
import { Col, Form, FormGroup, InputGroup, Button, FormControl } from 'react-bootstrap';

class Lists extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lists: [],
      newListTitle: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newListTitle) {
      return
    }
    const newList = { title: this.state.newListTitle };

    fetch(`${process.env.REACT_APP_BASE_URL}/lists/new`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "jwt " + localStorage.getItem('token')
      },
      body: JSON.stringify({
        title: this.state.newListTitle,
        private: true,
        items: []
      })
    })
      .then(response => response.json())
      .then((response) => {
        console.log('response: ', response.message);
        this.setState({ lists: [...this.state.lists, newList], newListTitle: '' });
      })
      .catch((err) => { console.log('Failed!', err) });
  }

  handleChange(e) {
    this.setState({ newListTitle: e.target.value });
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
    return (
      <div className="lists">
        <Col mdOffset={2} md={8}>
          <Link id="task-history" to="/task-history">Task History</Link>
          {this.state.lists.map((list, index) => (
            <List
              key={index}
              title={list.title}
              id={list._id}
            />
          ))}
          <Form onSubmit={(e) => this.handleSubmit(e)}>
            <FormGroup controlId="newList">
              <InputGroup>
                <FormControl className="newList" type="text" placeholder="Name your new List" value={this.state.newItemTitle} onChange={(e) => this.handleChange(e)} />
                <InputGroup.Button>
                  <Button type="submit">Create List</Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </Form>
          <Route exact path="/lists" />
        </Col>
      </div>
    )
  }
}

export default Lists;