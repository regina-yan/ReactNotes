/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import produce, { enableAllPlugins } from 'immer';
import Note from './components/note';
import Add from './components/add_note';

// enables immer
enableAllPlugins();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: {},
      id: 0,
    };
  }

  createNote = (content) => {
    const counter = this.state.id;
    const newNote = (content);
    this.setState(
      produce((draft) => {
        draft.notes[counter] = newNote;
      }),
    );
    this.setState((prevState) => ({ id: prevState.id + 1 }));
  };

  deleteNote = (noteId) => {
    this.setState(
      produce((draft) => {
        delete draft.notes[noteId];
      }),
    );
  };

  updateNote = (noteId, note) => {
    this.setState(
      produce((draft) => {
        draft.notes[noteId] = { ...draft.notes[noteId], ...note };
      }),
    );
  };

  render() {
    return (
      <div>
        <Add onCreateNote={this.createNote} />
        {
            Object.entries(this.state.notes).map(([key, value]) => {
              return <Note key={key} myKey={key} title={value.title} text={value.text} onDeleteNote={this.deleteNote} onUpdateNote={this.updateNote} />;
            })
            }
      </div>
    );
  }
}

// export default App;

const root = createRoot(document.getElementById('main'));
root.render(<App />);
