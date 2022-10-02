/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      x: 0,
      y: 0,
    };
  }

  onTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  onTextChange = (event) => {
    this.setState({ text: event.target.value });
  };

  createNote = () => {
    this.props.onCreateNote(this.state);
    this.setState({ title: '' });
    this.setState({ text: '' });
  };

  render() {
    return (
      <div>
        <input onChange={this.onTitleChange} value={this.state.title} placeholder="title" />
        <input onChange={this.onTextChange} value={this.state.text} placeholder="text" />
        <button type="button" onClick={this.createNote}>Create</button>
      </div>
    );
  }
}

export default Add;
