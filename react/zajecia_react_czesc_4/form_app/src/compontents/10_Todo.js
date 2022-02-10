import { Component } from 'react';
import {nanoid} from 'nanoid';
import initialTodos from '../todos.json';
import TodoFilter from './ToDo/TodoFilter/TodoFilter';
import TodoEditor from './ToDo/TodoEditor/TodoEditor';
import TodoList from './ToDo/TodoList/TodoList';

export default class Todo extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    const todo = { id: nanoid(), text, completed: false };
    this.setState(({ todos }) => ({ todos: [todo, ...todos] }));
  };

  deleteTodo = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <div>
        <div>
          <p>Total: {totalTodoCount}</p>
          <p>Completed: {completedTodoCount}</p>
        </div>

        <TodoEditor onSubmit={this.addTodo} />
        <TodoFilter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}