import React, {Component} from 'react'
import TodoForm from './TodoForm'
import axios from 'axios'

export default class UpdateTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskName: props.toDo.taskName || '',
      assignee: props.toDo.assignee || '',
      error: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.putTodo = this.putTodo.bind(this);
  }

  async putTodo(id) {
    try {
      const res = await axios.put(`/api/todos/${id}`, this.state);
      this.props.updateState({todo: {taskName: res.data.taskName, assignee: res.data.assignee}})
    } catch (err) {
      this.setState({error: true});
    }
  }

  handleSubmit (event) {
    event.preventDefault();
    this.putTodo(this.props.id);
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    return (
      <div>
      <h1>Update Todo</h1>
      <TodoForm state={this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
    </div>
    )
  }
}
