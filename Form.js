import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : "Vishwas"
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username : event.target.value
        })
    }
    
    render() {
        return (
            <Form>
                <div>
                    <label>Username</label>
                    <input type="text" value = {this.state.username} onChange = {this.handleUsernameChange}/>
                </div>
            </Form>
        )
    }
}

export default Form
