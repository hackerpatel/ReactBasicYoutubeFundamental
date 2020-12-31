import React, { Component } from 'react'

class ClassClick extends Component {
    
    clickHandler(){  
        console.log("Button Was Clicked:")
    }
    render() {
        return (
            <div>
                <button onClick = {this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick
