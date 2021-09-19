import React from "react"

export default class AddTask extends React.Component {
    render(){
        return (
            <div>
                <form> 
                    <input name="task" placeholder="Create a new todo..."/>
                </form>
            </div>
        )
    }
}