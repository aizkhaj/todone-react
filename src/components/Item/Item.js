import React, {Component} from 'react';
import {Form, FormGroup, ListGroupItem} from 'react-bootstrap';
import '../Item/Item.css';

class Item extends Component {
  render() {
    return (
      <ListGroupItem>
        <Form>
          <FormGroup>
              {this.props.title}
              <input className="itemCheckbox" type="checkbox" checked={this.props.complete} onChange={this.props.toggleComplete}/>
          </FormGroup>
        </Form>
      </ListGroupItem>
    )
  }
}

export default Item;