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
                <form onSubmit={this.onTrigger} autoComplete="off" className="w-full"> 
                    <input type = "text" name="task" placeholder="Create a new todo..." 
                            className="w-full rounded pl-12 py-2 pr-2"/>
                    {/* <input type = "submit" value = "Submit"/> */}
                </form>
            </div>
        )
    }
}