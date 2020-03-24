import React from 'react'
  

const TodoForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="taskName">
                Task Name:
                {
                    props.state.taskName === ""
                    ? <span className='warning'>Field is required.</span>
                    : <span></span>
                }
            </label>
            <input type="text" name="taskName" value={props.state.taskName} onChange={props.handleChange}></input>

            <label htmlFor="assignee">Assign To:</label>
            {
                    props.state.assignee === ""
                    ? <span className='warning'>Field is required.</span>
                    : <span></span>
                }
            <input type="text" name="assignee" value={props.state.assignee} onChange={props.handleChange}></input>

            <button type="submit" disabled={!(props.state.taskName && props.state.assignee)}>Submit</button>

            {
                props.state.error
                ? <div className='error'>Yikes! Something went wrong: Network Error!</div>
                : null
            }
        </form>
    )
}

export default TodoForm