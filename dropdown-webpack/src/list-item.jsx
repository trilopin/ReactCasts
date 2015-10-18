import React from 'react';

export default class ListItem extends React.Component {
    handleClick() {
        this.props.whenItemClicked(this.props.item);
    }

    render() {
        return <li className={this.props.className}>
          <a onClick={this.handleClick.bind(this)}>{this.props.item}</a>
        </li>
    }
}
