import React, {Component} from 'react'
import axios from "axios";

export default class CreateTodo extends Component {
  constructor () {
    super();
    this.state = {
      taskName: '',
      assignee: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postData = this.postData.bind(this);
  }
  async postData() {
    const res = await axios.post('/api/todos', this.state)
    console.log(res.data);
  }
  handleSubmit (event) {
    event.preventDefault();
    this.postData();
  }
  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="taskName">Task Name:</label>
        <input type="text" name="taskName" value={this.state.taskName} onChange={this.handleChange}></input>

        <label htmlFor="assignee">Assign To:</label>
        <input type="text" name="assignee" value={this.state.assignee} onChange={this.handleChange}></input>

        <button type="submit">Submit</button>
      </form>
    )
  }
}
