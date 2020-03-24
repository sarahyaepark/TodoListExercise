import React, {Component} from 'react'
import axios from "axios";
import TodoForm from './TodoForm'


export default class CreateTodo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      taskName: '',
      assignee: '',
      error: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postData = this.postData.bind(this);
  }

  async postData() {
    try{
      const res = await axios.post('/api/todos', this.state)
      this.props.addTodo(res.data)
    }catch (err) {
      this.setState({error: true});
    }
  }

  handleSubmit (event) {
    event.preventDefault();
    this.postData();
    this.setState({
      taskName:'',
      assignee: ''
    })
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
