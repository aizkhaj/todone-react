import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Item from '../Item/Item';
import { Form, Button, FormGroup, FormControl, ListGroup, Panel, InputGroup } from 'react-bootstrap';
import '../List/List.css';

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      newItemTitle: ''
    };
  }

  toggleComplete(index) {
    const items = this.state.items.slice();
    const item = items[index];
    item.completed = item.completed ? false : true;
    this.setState({ items: items });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newItemTitle) {
      return
    }
    const newItem = { title: this.state.newItemTitle, completed: false };

    fetch(`${process.env.REACT_APP_BASE_URL}/lists/${this.props.id}/items/new`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "jwt " + localStorage.getItem('token')
      },
      body: JSON.stringify({
        title: this.state.newItemTitle,
        completed: false
      })
    })
      .then(response => response.json())
      .then((response) => {
        console.log('response: ', response.message);
        this.setState({ items: [...this.state.items, newItem], newItemTitle: '' });
      })
      .catch((err) => { console.log('Failed!', err) });
  }

  handleChange(e) {
    this.setState({ newItemTitle: e.target.value });
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_BASE_URL}/lists/${this.props.id}/items`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "jwt " + localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then((response) => {
        console.log('response for getting items: ', response);
        let items = response.map(items => items);
        this.setState({ items });
      })
      .catch((err) => { console.log('Failed!', err) });
  }

  render() {
    return (
      <div className="list">
        <Panel collapsible defaultExpanded header={this.props.title}>
          <ListGroup fill>
            {this.state.items.map((item, index) => (
              <Item
                key={index}
                title={item.title}
                completed={item.completed}
                toggleComplete={() => {
                  this.toggleComplete(index);
                }} />
            ))}
          </ListGroup>
          <Form onSubmit={(e) => this.handleSubmit(e)}>
            <FormGroup controlId="newItem">
              <InputGroup>
                <FormControl className="newItem" type="text" value={this.state.newItemTitle} onChange={(e) => this.handleChange(e)} placeholder="Enter a task" />
                <InputGroup.Button>
                  <Button type="submit">Submit</Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </Form>
        </Panel>
        <Route exact path="/list" />
      </div>
    )
  }
}

export default List;