import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 0,
          task: "make mylife great again",
          isComplete: false
        },
        {
          id: 2,
          task: "make your great again",
          isComplete: false
        },
      ]
    }
  }

  render() {
    const todoList = this.state.todos;

    return (
        <div>
          <ul>{todoList.map(todo => <li>todo.task</li>)}</ul>
        </div>
    )
  }
}

ReactDOM.render(<Todo />, document.getElementById('root'));

