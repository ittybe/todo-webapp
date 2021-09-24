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
                <button onClick={() => this.markTask()} className={
                 `
                 m-4 
                 p-2 
                 rounded-full 
                 border 
                 border-l-dark-grayish-blue 
                 hover:border-primary-bright-blue 
                 ` + (this.props.task.isActive ? "  " : " bg-primary-check-background ")   
                }
                >
                    <div className={" icon  " + (this.props.task.isActive? "bg-icon-check": "block")}></div>
                </button>
                <button onClick={() => this.markTask()} className="flex-grow">{this.props.task.taskBody}</button>
                <button onClick={() => this.removeTask()} className="p-4">
                    <div className="icon bg-icon-cross"></div>
                </button>
            </div>
        ) 
    }
}