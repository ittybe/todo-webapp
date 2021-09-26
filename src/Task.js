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
            <div className="task">
                <div className={
                    `
                    check
                    dark:d-check
                    ` + (this.props.task.isActive ? "bg-l-dark-grayish-blue " : " bg-check-gradient ")
                }
                >
                    <button onClick={() => this.markTask()} className={
                    (this.props.task.isActive ? "  " : " bg-check-gradient ")   
                    }
                    >
                        <div className={"icon  " + (this.props.task.isActive? "": "bg-icon-check")}></div>
                    </button>
                </div>
               
                <button onClick={() => this.markTask()} className="flex-grow text-left self-center">{this.props.task.taskBody}</button>
                <button onClick={() => this.removeTask()} className="cross ">
                    <div className="icon"></div>
                </button>
            </div>
        ) 
    }
}