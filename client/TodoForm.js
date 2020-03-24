import React from 'react'
  

const TodoForm = (props) => {

console.log(props)

    return(
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="taskName">Task Name:</label>
            <input type="text" name="taskName" value={props.state.taskName} onChange={props.handleChange}></input>

            <label htmlFor="assignee">Assign To:</label>
            <input type="text" name="assignee" value={props.state.assignee} onChange={props.handleChange}></input>

            <button type="submit">Submit</button>
        </form>
    )
}

export default TodoForm