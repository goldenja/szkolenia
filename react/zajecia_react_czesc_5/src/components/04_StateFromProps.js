import React from "react";
import initialTodos from '../todos.json';
import expandedTodos from '../todos2.json';

class TodoList extends React.Component {

    state ={todos:this.props.todos , diff:[]} 

    static getDerivedStateFromProps = (nextProps, prevState) => {
        if (JSON.stringify(nextProps.todos??[]) === JSON.stringify(prevState.todos??[]))
        {
            return { diff: [] };
        }
        else
        {
            return {todos:nextProps.todos??[] , diff:TodoList.getDifference(nextProps.todos??[] , prevState.todos??[])};
        }
    }
       
    static getDifference(array1, array2) {
        return array1.filter(object1 => {
          return !array2.some(object2 => {
            return object1.id === object2.id;
          });
        });
      }

    render() {

        const { todos , diff } = this.state;

        return (
        <React.Fragment>

            { <> Ilość róznych rekordów {diff.length}  </> }
            
            <ul className="TodoList">
                {todos.map(({ id, text }) => (
                    <li key={id} className="TodoList__item">
                        <p className="TodoList__text">{text}</p>
                    </li>
                ))}
            </ul>
        </React.Fragment>);
    }
};

class StateFromProps extends React.Component {
    state = { todoList: initialTodos }

    loadNewList = () => {
        this.setState({ todoList: expandedTodos });
    }

    render() {
        const { todoList } = this.state;

        return (
            <div>
                <TodoList todos={todoList} />
                <button onClick={this.loadNewList}>Load new list</button>
            </div>
        );
    }
}

export default StateFromProps