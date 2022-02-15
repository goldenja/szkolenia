import Todo from '../Todo/Todo';
import { List, ListItem } from './TodoList.styled';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <List>
    {todos.map(({ id, text, completed }) => (
      <ListItem key={id} completed={completed}>
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
        />
      </ListItem>
    ))}
  </List>
);

export default TodoList;
