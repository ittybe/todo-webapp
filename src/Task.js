import React from "react";

export default class Task extends React.Component {
    markTask() {
        this.props.markTaskParent(this.props.task.id)
    }

    removeTask() {
        this.props.removeTaskParent(this.props.task.id)
    }

    render() {
        return (
            <div className="flex flex-row">
                <button onClick={() => this.markTask()} className="p-4 text-4xl">V</button>
                <button onClick={() => this.markTask()} >{this.props.task.taskBody}</button>
                <button onClick={() => this.removeTask()} className="p-4 text-4xl">X</button>
            </div>
        ) 
    }
}