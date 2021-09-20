import React from "react";
import AddTaskInput from "./AddTaskInput";

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
            tasks: Array(0),
        }
        
        // binding for event handlers
        this.addTask = this.addTask.bind(this)
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

    render() {
        return (
            <div>
                <AddTaskInput parentAddTask={this.addTask}/>
                <div> 

                </div>
                <div className="testing rounded">something something</div>
            </div>
        )
    }
}

export default App