import React from "react";

export default class ChangeTasksToShow extends React.Component {
    setAll() {
        this.props.set("all")
    }
    
    setActive() {
        this.props.set("active")
    }

    setCompleted() {
        this.props.set("completed")
    }

    render() {
        return (
            <div className="flex flex-row">
                <button onClick={()=> this.setAll()}>All</button>
                <button onClick={()=> this.setActive()}>Active</button>
                <button onClick={()=> this.setCompleted()}>Completed</button>
            </div>
        )
    }
}