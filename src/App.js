import React from "react";

class App extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            tasks: [
                // {
                //     taskBody: "lorem",
                //     isActive: true
                // }
            ]
        }
    }
    render() {
        return (

            <div className="testing rounded">something something</div>
        )
    }
}

export default App