import React from "react"

export default class AddTaskInput extends React.Component {
    onTrigger = (event) => {
        event.preventDefault();
        if (event.target.task.value !== ""){
            let task = {
                taskBody: event.target.task.value,
                isActive: true,
                id: null
            }
            this.props.parentAddTask(task)
            event.target.task.value = ""
        }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onTrigger} autoComplete="off"> 
                    <input type = "text" name="task" placeholder="Create a new todo..."/>
                    {/* <input type = "submit" value = "Submit"/> */}
                </form>
            </div>
        )
    }
}