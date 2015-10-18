import React from 'react';

export default class Button extends React.Component {
    render() {
        return <button onClick={this.props.whenClicked} className={"btn " + this.props.className} type="button">
          {this.props.title}
          <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
        </button>
    }
}
