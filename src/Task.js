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
            <div className="task border-l-light-grayish-blue dark:border-d-very-very-dark-grayish-blue">
                <div className={
                    `
                    check
                    dark:d-check
                    ` + (this.props.task.isActive ? " bg-l-light-grayish-blue dark:bg-d-very-dark-grayish-blue " : " bg-check-gradient ")
                }
                >
                    <button onClick={() => this.markTask()} className={
                    (this.props.task.isActive ? " bg-white dark:bg-d-very-dark-desaturated-blue " : " bg-check-gradient ")   
                    }
                    >
                        <div className={"icon  " + (this.props.task.isActive? "": "bg-icon-check")}></div>
                    </button>
                </div> 
                <button onClick={() => this.markTask()} className={
                    `
                    task-body 
                    ` + (this.props.task.isActive? "" : " text-l-light-grayish-blue dark:text-d-very-dark-grayish-blue line-through ")
                }>{this.props.task.taskBody}</button>
                <button onClick={() => this.removeTask()} className="cross ">
                    <div className="icon bg-icon-cross sm:bg-none"></div>
                </button>
            </div>
        ) 
    }
}