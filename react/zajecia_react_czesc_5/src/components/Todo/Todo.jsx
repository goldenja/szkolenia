import { Wrapper, Text, Checkbox, Button } from './Todo.styled';

const Todo = ({ text, completed, onToggleCompleted, onDelete }) => (
  <Wrapper>
    <Checkbox
      type="checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    />
    <Text completed={completed}>{text}</Text>
    <Button type="button" onClick={onDelete}>
      Delete
    </Button>
  </Wrapper>
);

export default Todo;
