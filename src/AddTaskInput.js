import React from "react"

export default class AddTaskInput extends React.Component {
    onTrigger = (event) => {
        event.preventDefault();

        let task = {
            taskBody: event.target.task.value,
            isActive: true
        }
        this.props.parentAddTask(task)

        console.log("after parent!!!!!")
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onTrigger}> 
                    <input type = "text" name="task" placeholder="Create a new todo..."/>
                    <input type = "submit" value = "Submit"/>
                </form>
            </div>
        )
    }
}