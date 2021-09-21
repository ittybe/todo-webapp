import React from "react";
import AddTaskInput from "./AddTaskInput";
import TaskBoard from "./TaskBoard"
let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function isUniqueId(tasks, id)
{
    return (tasks.filter((task) => task.id === id)).length === 0
}

class App extends React.Component {
    constructor (props) {
        super(props)

        // {
        //     taskBody: "lorem",
        //     isActive: true or false
        // }
        this.state = {
            tasks: [
            ],
        }
        
        // binding for event handlers
        this.addTask = this.addTask.bind(this)
        this.markTask = this.markTask.bind(this)
        this.switchMarkTask = this.switchMarkTask.bind(this)
        this.removeTask = this.removeTask.bind(this)
    }

    addTask(task){
        let tasks_ = this.state.tasks.slice();  // copy
        let id = guid()
        for (let index = 0; index < 10 && !isUniqueId(tasks_, id); index++) {
            id = guid()
            console.log("not unique id!")
        }
        task.id = id

        tasks_.push(task)
        this.setState(
            {
                tasks: tasks_
            })
        
        console.log(`tasks ${JSON.stringify(task)} added`)
    }

    markTask(taskId, isActive) {
        let tasks_ = this.state.tasks.slice()
        let taskIndex = tasks_.findIndex(task => task.id === taskId)
        if (taskIndex !== -1) {
            tasks_[taskIndex].isActive = isActive;
            this.setState({tasks: tasks_})
            console.log(`task ${taskId} marked, isActive ${isActive}`)
        }
        else {
            console.log(`task ${taskId} not marked`)
        }
    }

    switchMarkTask(taskId) {
        let tasks_ = this.state.tasks.slice()
        let taskIndex = tasks_.findIndex(task => task.id === taskId)
        this.markTask(taskId, !tasks_[taskIndex].isActive)
    }

    removeTask(taskId) {
        let tasks_ = this.state.tasks.slice()
        let taskIndex = tasks_.findIndex(task => task.id === taskId)
        if (taskIndex !== -1) {
            tasks_.splice(taskIndex, 1)
            this.setState({tasks: tasks_})
            console.log(`task ${taskId} removed`)
        }
        else {
            console.log(`task ${taskId} not removed`)
        }
    }

    render() {
        return (
            <div>
                <AddTaskInput parentAddTask={this.addTask}/>
                <TaskBoard tasks={this.state.tasks.slice()} remove={this.removeTask} mark={this.switchMarkTask} />
            </div>
        )
    }
}

export default App