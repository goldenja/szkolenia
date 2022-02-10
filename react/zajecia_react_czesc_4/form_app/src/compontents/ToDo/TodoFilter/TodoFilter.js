const TodoFilter = ({ value, onChange }) => (
    <label>
      Filter todos
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
  
  export default TodoFilter;
  