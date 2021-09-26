import React from "react";
import Task from "./Task";

export default class TaskBoard extends React.Component {
    render() {
        return (
            <div className="flex-grow rounded bg-white shadow-2xl my-6">
                <div>
                {this.props.tasks.map((task, index) => {
                    return <Task 
                        key={task.id} 
                        index={index} 
                        removeTaskParent={this.props.remove} 
                        markTaskParent={this.props.mark}
                        task = {task}
                        />
                })}
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>
        ) 
    }
}