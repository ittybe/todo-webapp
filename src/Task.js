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
            <div className="flex flex-row items-start">
                <button onClick={() => this.markTask()} className={
                `
                check
                ` + (this.props.task.isActive ? "  " : " bg-check-gradient ")   
                }
                >
                    <div className={" icon  " + (this.props.task.isActive? "": "bg-icon-check")}></div>
                </button>
                <button onClick={() => this.markTask()} className="flex-grow text-left self-center">{this.props.task.taskBody}</button>
                <button onClick={() => this.removeTask()} className="m-4 p-2">
                    <div className="icon bg-icon-cross"></div>
                </button>
            </div>
        ) 
    }
}