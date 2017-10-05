import React, { Component } from 'react';
import Item from '../Item/Item';

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
      ]
    };
  }

  toggleComplete(index) {
    const items = this.state.items.slice();
    const item = items[index];
    item.completed = item.completed ? false : true;
    this.setState({ items: items });
  }

  render() {
    return (
        <ul>
          { this.state.items.map((item, index) => (
              <Item 
                key={index} 
                title={item.title} 
                completed={item.completed} 
                toggleComplete={() => {
                this.toggleComplete(index);
              }} />
            ))}
        </ul> 
    )
  }
}

export default List;