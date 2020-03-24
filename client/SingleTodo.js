import React, {Component} from 'react'
import Todo from './Todo'
import UpdateTodo from './UpdateTodo'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class SingleTodo extends Component {
  constructor () {
    super()
    this.state = {
      todo: {}
    }
    this.updateState = this.updateState.bind(this)
  }

  updateState(newState){
    this.setState(newState)
  }

  async componentDidMount () {
    const todoId = this.props.match.params.todoId
    const res = await axios.get(`/api/todos/${todoId}`)
    this.setState({todo: res.data})
  }

  render () {
    const todo = this.state.todo

    return (
      <div id='single-todo'>
        <Todo todo={todo} />
        {
          todo.taskName
          ? <UpdateTodo id={this.state.todo.id} updateState={this.updateState} toDo={this.state.todo}/>
          : null
        }
        <Link to='/'>Back</Link>
      </div>
    )
  }
}
