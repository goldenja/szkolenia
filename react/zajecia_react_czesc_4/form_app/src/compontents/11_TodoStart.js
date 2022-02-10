import { Component } from 'react';
import initialTodos from '../todos.json';
import TodoList from './ToDo/TodoList/TodoList';

export default class TodoStart extends Component {
  state = {
    todos: initialTodos
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  getTodos = () => {
    const {  todos } = this.state;
    return todos;
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  deleteTodo = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== todoId),
    }));
  };
  
  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const todosList = this.getTodos();

    return (
      <div>
        <div>
          <p>Total: {totalTodoCount}</p>
          <p>Completed: {completedTodoCount}</p>
        </div>

        <TodoList
          todos={todosList}
          onDeleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}