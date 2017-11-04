import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Item from '../Item/Item';
import { Form, Button, FormGroup, FormControl, ListGroup, Panel, InputGroup, Col } from 'react-bootstrap';
import '../List/List.css';
import NewList from '../NewList/NewList';

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [
        {
          title: 'Walk the cat',
          completed: false
        },
        {
          title: "Find a cat",
          completed: true
        }
      ],
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
    this.setState({ items: [...this.state.items, newItem], newItemTitle: '' });
  }

  handleChange(e) {
    this.setState({ newItemTitle: e.target.value });
  }

  render() {
    return (
      <div className="list">
        <Col md={2} />
        <Col md={8}>
          <Link id="task-history" to="/task-history">Task History</Link>
          <Panel collapsible defaultExpanded header="List Name Here">
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
          <NewList />
        </Col>
        <Col md={2} />
        <Route exact path="/lists" />
      </div>
    )
  }
}

export default List;