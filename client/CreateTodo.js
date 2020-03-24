import React, {Component} from 'react'
import axios from "axios";
import TodoForm from './TodoForm'


export default class CreateTodo extends Component {
  constructor (props) {
    super(props);
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
    this.props.addTodo(res.data)

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
      <TodoForm state={this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
    )
  }
}
