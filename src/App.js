import React from "react";
import AddTaskInput from "./AddTaskInput";

class App extends React.Component {
    constructor (props) {
        super(props)

        // {
        //     taskBody: "lorem",
        //     isActive: true or false
        // }
        this.state = {
            tasks: Array(0),
        }
        
        // binding for event handlers
        this.addTask = this.addTask.bind(this)
    }

    addTask(task){
        let tasks_ = this.state.tasks.slice();  // copy
        tasks_.push(task)
        this.setState(
            {
                tasks: tasks_
            })
        console.log(`tasks ${task} added`)
    }

    render() {
        return (
            <div>
                <AddTaskInput parentAddTask={this.addTask}/>
                <div className="testing rounded">something something</div>
            </div>
        )
    }
}

export default App