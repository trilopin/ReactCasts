import React from 'react';

export default class ListItem extends React.Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.whenItemClicked(this.props.item);
    }

    render() {
        return <li className={this.props.className}>
          <a onClick={this.handleClick}>{this.props.item}</a>
        </li>
    }
}
