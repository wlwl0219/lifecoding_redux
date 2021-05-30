import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    var tags = [];
    for (var i = 0; i < this.props.data.length; i++) {
      tags.push(
        <li key={this.props.data[i].id}>
          <a
            href="#content"
            data-id={this.props.data[i].id}
            onClick={function (e) {
              this.props.onClick(Number(e.target.dataset.id));
            }.bind(this)}
          >
            {this.props.data[i].title}
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ol>{tags}</ol>
      </nav>
    );
  }
}
