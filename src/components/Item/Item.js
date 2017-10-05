import React, {Component} from 'react';

class Item extends Component {
  render() {
    return (
      <li>{this.props.title} <input type="checkbox" checked={this.props.completed} onChange={this.props.toggleComplete}/></li>
    )
  }
}

export default Item;