// We need to show a button and a list
// This component should know when to show the list
// based on when the user clicks on a button

import React from 'react';
import Button from './button.jsx';
import ListItem from './list-item.jsx';

export default class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    console.dir(this.state)
  }

  handleClick() {
    this.setState({open: !this.state.open});
  }

  handleItemClick(item) {
    this.setState({
      open: false,
      itemTitle: item
    });
  }

  render() {

    var list = this.props.items.map(function(item){
      return <ListItem
              item={item}
              whenItemClicked={this.handleItemClick.bind(this)}
              className={this.state.itemTitle === item ? "active" : "" }
              />
    }.bind(this));

    return <div className="dropdown">
      <Button
        whenClicked={this.handleClick.bind(this)}
        className="btn-default"
        subTitleClassName="caret"
        title={this.state.itemTitle || this.props.title}
        />
      <ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>
        {list}
      </ul>
    </div>

  }
}
