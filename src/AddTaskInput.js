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
                <form onSubmit={this.onTrigger} autoComplete="off" className="add-task-form bg-white dark:bg-d-very-dark-desaturated-blue shadow"> 
                    <div className="border-l-light-grayish-blue dark:border-d-very-dark-grayish-blue"></div>
                    <input type = "text" name="task" placeholder="Create a new todo..." 
                            className="add-task-input dark:bg-d-very-dark-desaturated-blue"/>
                    {/* <input type = "submit" value = "Submit"/> */}
                </form>
            </div>
        )
    }
}