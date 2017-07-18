import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';
import connect from './connect';
import { toggleTodo } from './actions';

class TodoList extends React.Component {
  render() {
    const { todos, onTodoClick } = this.props;
    return (
      <ul>
        {
          todos.map(todo => (
            <Todo
              key={ todo.id }
              completed={ todo.completed }
              text={ todo.text }
              onClick={ () => onTodoClick(todo.id) }
            />
          ))
        }
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ todos: state })

const mapDispatchToProps = dispatch => ({
  onTodoClick: (id) => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
