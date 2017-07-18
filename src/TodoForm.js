import React from 'react';
import connect from './connect';
import { addTodo } from './actions';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ text: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo({
      id: this.props.nextId,
      text: this.state.text
    })
    this.setState({ text: '' });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input onChange={ this.handleInputChange } value={ this.state.text } />
        <button type="submit">Add todo</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({ nextId: state.length + 1 });

const mapDispatchToProps = dispatch => ({
  addTodo: ({ id, text }) => dispatch(addTodo(id, text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
