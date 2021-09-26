import React from "react";
import Task from "./Task";
import ChangeTasksToShow from "./ChangeTasksToShow";

export default class TaskBoard extends React.Component {
    render() {
        return (
            <div>
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
                    <div className="flex flex-row p-4 text-l-dark-grayish-blue">
                        <div>{this.props.tasks.length} items left</div>
                        <div className="flex-grow m-2"></div>
                        <button onClick={this.props.clearAllCompleted} className="hover:text-l-very-dark-grayish-blue">Clear completed</button>
                    </div>  
                </div>
                <ChangeTasksToShow tasksToShow={this.props.tasksToShow} setTasksToShow={this.props.setTasksToShow}/>
            </div>
            
        ) 
    }
}