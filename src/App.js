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

        
        this.state = {
            tasks: [
            // {
            //     taskBody: "lorem",
            //     isActive: true or false
            // }
            ],
            tasksToShow: "all", // all active completed
            isLightTheme: true
        }
        // binding for event handlers
        this.addTask = this.addTask.bind(this)
        this.markTask = this.markTask.bind(this)
        this.switchMarkTask = this.switchMarkTask.bind(this)
        this.removeTask = this.removeTask.bind(this)
        this.setTasksToShow = this.setTasksToShow.bind(this)
        this.clearAllCompleted = this.clearAllCompleted.bind(this)
        this.handleOnDragEnd = this.handleOnDragEnd.bind(this)
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

    removeCompleted(){

    }

    tasksToRender() {
        // here tasks sorted by 
        // active completed and all 
        // it returns tasks array
        switch (this.state.tasksToShow) {
            case "all":{
                return this.state.tasks;
            }

            case "active":{
                let tasks = this.state.tasks.filter((task) => task.isActive)
                return tasks;               
            }
                
            case "completed":{
                let tasks = this.state.tasks.filter((task) => !task.isActive)
                return tasks;
            }
            default:
                return this.state.tasks
        }
    }

    setTasksToShow (value) {
        this.setState({tasksToShow: value})
    }

    clearAllCompleted () {
        let _tasks = this.state.tasks;
        let _allActiveTasks = _tasks.filter((task) => task.isActive);
        
        this.setState({tasks: _allActiveTasks})
    }

    getQuantityOnlyActive() {
        let _tasks = this.state.tasks;
        let _allActiveTasks = _tasks.filter((task) => task.isActive);

        return _allActiveTasks.length; 
    }

    changeTheme(){
        let isLightTheme = this.state.isLightTheme
        this.setState({isLightTheme: !isLightTheme})
        // change document bg with pure js 
        if (this.state.isLightTheme){
            document.body.style.backgroundColor = "var(--d-very-dark-blue)"
        }
        else {
            document.body.style.backgroundColor = "var(--l-light-gray)"
        }

    }

    handleOnDragEnd(result, propsTasks) {
        if (!result.destination) return;
        console.log(`in handleOnDragEnd`)
        const tasksGlobal = Array.from(this.state.tasks)
        const tasks = Array.from(propsTasks);
        const [reorderedTask] = tasks.splice(result.source.index, 1);
        tasks.splice(result.destination.index, 0, reorderedTask);

        // if not last elem
        if (result.source.index !== tasks.length - 1) {
            // get previous task by decreasing destination index
            let previousTask = tasks[result.destination.index - 1];            
            // then cut out reordered task in main task array 
            let index = tasksGlobal.indexOf(reorderedTask)
            tasksGlobal.splice(index, 1)
            // and paste reordered task right after previous task
            let indexPrev = tasksGlobal.indexOf(previousTask)
            tasksGlobal.splice(indexPrev+1, 0, reorderedTask)
        }
        else {
            // get next task by increasing destination index
            let nextTask = tasks[result.destination.index + 1]
            // then cut out reordered task in main task array 
            let index = tasksGlobal.indexOf(reorderedTask)
            tasksGlobal.splice(index, 1)
            // and paste reordered task right before next task  
            let indexNext = tasksGlobal.indexOf(nextTask)
            tasksGlobal.splice(indexNext, 0, reorderedTask)
        }
        this.setState({tasks: tasksGlobal})
    }

    render() {
        return (
            <div className={(this.state.isLightTheme? "" : " dark")}>
                <div className={`main-bg bg-img-light-mb sm:bg-img-light-desk dark:bg-img-dark-mb sm:dark:bg-img-dark-desk bg-top bg-no-repeat bg-contain overflow-auto`}>
                    <div className={`mx-8 my-12 sm:m-auto sm:my-12 flex flex-col flex-grow justify-center max-w-xl`}>
                        <div className="header flex justify-between items-center">
                            <div className="text-4xl font-bold text-white tracking-widest text-center">TODO</div>
                            <button className="bg-moon-sign dark:bg-sun-sign bg-no-repeat bg-auto" onClick={()=>this.changeTheme()}></button>
                        </div>
                        <div className="flex-grow flex flex-col my-12 dark:text-d-light-grayish-blue">
                            <AddTaskInput parentAddTask={this.addTask}/>
                            <TaskBoard handleOnDragEnd={this.handleOnDragEnd} quantityOnlyActive={this.getQuantityOnlyActive()} tasks={this.tasksToRender()} tasksToShow={this.state.tasksToShow} setTasksToShow={this.setTasksToShow} clearAllCompleted={this.clearAllCompleted} remove={this.removeTask} mark={this.switchMarkTask} />
                            <div className="flex justify-center my-12 items-center text-l-dark-grayish-blue dark:text-d-very-dark-grayish-blue">Drag and drop to reorder list</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App