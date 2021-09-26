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
            <div className="task dark:d-task">
                <div className={
                    `
                    check
                    dark:d-check
                    ` + (this.props.task.isActive ? " bg-l-light-grayish-blue  " : " bg-check-gradient ")
                }
                >
                    <button onClick={() => this.markTask()} className={
                    (this.props.task.isActive ? "  " : " bg-check-gradient ")   
                    }
                    >
                        <div className={"icon  " + (this.props.task.isActive? "": "bg-icon-check")}></div>
                    </button>
                </div>
               
                <button onClick={() => this.markTask()} className={
                    `
                    task-body 
                    ` + (this.props.task.isActive? "" : " text-l-light-grayish-blue line-through ")
                }>{this.props.task.taskBody}</button>
                <button onClick={() => this.removeTask()} className="cross ">
                    <div className="icon bg-icon-cross sm:bg-none"></div>
                </button>
            </div>
        ) 
    }
}