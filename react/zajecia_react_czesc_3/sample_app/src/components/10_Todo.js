import React from "react";

import TodoList from './TodoList/TodoList';
import initialTodos from '../todos.json';

export class Todo extends React.Component {
    state = {
        todos: initialTodos,
    };

    deleteTodo = todoId => {
        this.setState(state => ({
            todos: state.todos.filter(todo => todo.id !== todoId),
        }));
    };

    render() {
        const { todos } = this.state;
        const totalTodoCount = todos.length;
        const completedTodoCount = todos.reduce(
            (total, todo) => (todo.completed ? total + 1 : total),
            0,
        );

        return (
            <div>
                <div>
                    <p>Total count: {totalTodoCount}</p>
                    <p>Completed: {completedTodoCount}</p>
                </div>
                <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
            </div>
        );
    }
}

export default Todo
