import React from "react";
import Task from "./Task";
import ChangeTasksToShow from "./ChangeTasksToShow";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default class TaskBoard extends React.Component {
    onDragStart() {
        // good times
        if (window.navigator.vibrate) {
            window.navigator.vibrate(25);
        }
    }

    render() {
        return (
            <div>
                <div className="flex-grow rounded bg-white dark:bg-d-very-dark-desaturated-blue shadow-2xl my-6">
                    <DragDropContext onDragEnd={(result) => { this.props.handleOnDragEnd(result, this.props.tasks) }} onDragStart={()=>this.onDragStart()}>
                        <Droppable droppableId="tasks">
                            {(provided, snapshot) => {
                                return (<div ref={provided.innerRef} {...provided.droppableProps} >
                                    {this.props.tasks.map((task, index) => {
                                        return (
                                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                                {(provided) => {
                                                    return (<Task
                                                        key={task.id}
                                                        index={index}
                                                        removeTaskParent={this.props.remove}
                                                        markTaskParent={this.props.mark}
                                                        task={task}
                                                        innerRef={provided.innerRef}
                                                        provided={provided}
                                                    />)
                                                }}
                                            </Draggable>
                                        )
                                    })}
                                    {provided.placeholder}
                                </div>
                                )
                            }}
                            
                        </Droppable>
                    </DragDropContext>
                    <div className="flex flex-row p-4 sm:py-2 justify-between items-center text-l-dark-grayish-blue dark:text-d-very-dark-grayish-blue">
                        <div>{this.props.quantityOnlyActive} items left</div>
                        <div className="hidden sm:block"><ChangeTasksToShow tasksToShow={this.props.tasksToShow} setTasksToShow={this.props.setTasksToShow} /></div>
                        <button onClick={this.props.clearAllCompleted} className="hover:text-l-very-dark-grayish-blue dark:hover:text-d-light-grayish-blue-hover">Clear completed</button>
                    </div>
                </div>
                <div className="sm:hidden">
                    <ChangeTasksToShow tasksToShow={this.props.tasksToShow} setTasksToShow={this.props.setTasksToShow} />
                </div>
            </div>

        )
    }
}