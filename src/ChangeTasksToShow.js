import React from "react";

export default class ChangeTasksToShow extends React.Component {
    setAll() {
        this.props.setTasksToShow("all")
    }
    
    setActive() {
        this.props.setTasksToShow("active")
    }

    setCompleted() {
        this.props.setTasksToShow("completed")
    }

    textColor(currentTasksToShow) {
        return this.props.tasksToShow === currentTasksToShow ? "text-primary-blue" : "";
    }

    render() {
        return (
            <div className="change-tasks">
                <button onClick={()=> this.setAll()} className={this.textColor("all")}>All</button>
                <button onClick={()=> this.setActive()} className={this.textColor("active")}>Active</button>
                <button onClick={()=> this.setCompleted()} className={this.textColor("completed")}>Completed</button>
            </div>
        )
    }
}