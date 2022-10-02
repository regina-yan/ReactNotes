/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import Draggable from 'react-draggable';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      text: this.props.text,
      x: 0,
      y: 0,
      zIndex: 0,
      editing: false,
    };
    // this.onInputChange = this.onInputChange.bind(this);
  }

  deleteNote = () => {
    this.props.onDeleteNote(this.props.myKey);
    console.log(this.props.myKey);
  };

  editNote = () => {
    if (this.state.editing) {
      this.props.onUpdateNote(this.props.myKey, this.state);
    }
    this.setState((prevState) => ({ editing: !prevState.editing }));
  };

  onTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  onTextChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleDrag = (event, data) => {
    // console.log(event, data.x, data.y);
    this.setState({ x: data.x, y: data.y });
    this.props.onUpdateNote(this.props.myKey, this.state);
  };

  drawNote() {
    if (this.state.editing) {
      return (
        <Draggable onDrag={this.handleDrag}>
          <div className="card">
            <div className="contents_container">
              <div className="notes_container">
                <input onChange={this.onTitleChange} value={this.state.title} placeholder="title" />
                <input onChange={this.onTextChange} value={this.state.text} placeholder="text" />
              </div>
              <div>
                <button type="button" onClick={this.editNote}>Done</button>
                <button type="button" onClick={this.deleteNote}>Delete</button>
              </div>
            </div>
          </div>
        </Draggable>
      );
    }
    return (
      <Draggable onDrag={this.handleDrag}>
        <div className="card">
          <div className="contents_container">
            <div className="notes_container">
              <div> {this.props.title}</div>
              <div>{this.props.text} </div>
            </div>
            <div>
              <button type="button" onClick={this.editNote}>Edit</button>
              <button type="button" onClick={this.deleteNote}>Delete</button>
            </div>
          </div>
        </div>
      </Draggable>

    );
  }

  render() {
    return (
      this.drawNote()
    );
  }
}

export default Note;
