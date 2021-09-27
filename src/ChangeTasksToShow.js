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
        return this.props.tasksToShow === currentTasksToShow ? " text-primary-blue " : " text-l-dark-grayish-blue dark:text-d-dark-grayish-blue ";
    }

    render() {
        return (
            <div className="change-tasks flex flex-row justify-center rounded bg-white dark:bg-d-very-dark-desaturated-blue p-2 shadow-2xl sm:shadow-none ">
                <button onClick={()=> this.setAll()} className={`m-2 hover:text-l-very-dark-grayish-blue dark:hover:text-d-light-grayish-blue-hover` + this.textColor("all")}>All</button>
                <button onClick={()=> this.setActive()} className={`m-2 hover:text-l-very-dark-grayish-blue dark:hover:text-d-light-grayish-blue-hover` + this.textColor("active")}>Active</button>
                <button onClick={()=> this.setCompleted()} className={`m-2 hover:text-l-very-dark-grayish-blue dark:hover:text-d-light-grayish-blue-hover` + this.textColor("completed")}>Completed</button>
            </div>
        )
    }
}