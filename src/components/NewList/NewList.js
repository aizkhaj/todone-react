import React, {Component} from 'react';
import {Form, FormGroup, InputGroup, Button, FormControl} from 'react-bootstrap';
// import List from '../List/List';

class NewList extends Component {
  render() {
    return (
      <div className="new-list">
        <Form>
          <FormGroup>
            <InputGroup>  
              <FormControl type="text" placeholder="Name your new List" />
              <InputGroup.Button>  
                <Button type="submit">Create List</Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default NewList;