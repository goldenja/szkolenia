
import React from "react";
import initialTodos from '../todos.json';
import expandedTodos from '../todos2.json';

class TodoList extends React.Component {

  state = { length: this.props.list.length}

  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.list.length < this.props.list.length) {
      return 0;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
   
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = snapshot;
    }
  }

  render() {
    return (
      <div ref={this.listRef} style={{width:"200px", height:"100px" , overflow: "auto"}}>
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

      </div>
    );
  }
};


class SnapshotBeforeUpdate  extends React.Component {
  state = { todoList: initialTodos }

  loadNewList = () => {
      this.setState({ todoList: expandedTodos });
  }

  render() {
      const { todoList } = this.state;

      return (
          <div>
              <TodoList list={todoList} />
              <button onClick={this.loadNewList}>Load new list</button>
          </div>
      );
  }
  }

export default SnapshotBeforeUpdate