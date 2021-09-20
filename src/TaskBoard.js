import React from "react";

export default class TaskBoard extends React.Component {
    render() {
        return (
            <div>
                {this.props.tasks.map((task, index) => {
                    <Task key={task.id} index={index} removeTask={} markTask={}/>
                })}
            </div>
        ) 
    }
}