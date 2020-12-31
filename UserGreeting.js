import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {

        //4th use of conditional rendering
         return this.state.isLoggedIn && <div>Welcome Anonymous</div>

        //3rd use of conditional rendering
        // return (
        //     this.state.isLoggedIn ?
        //     <div>Welcome Anonymous</div> :
        //     <div>Welcome Worm</div>
        // )
        
        //2nd use of conditional rendering
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Anonymous</div>
        // } 
        // else {
        //     message = <div>Welcome Worm</div>
        // }

        // return <div>{message}</div>
        
        //1st use of conditional rendering
        // if(this.state.isLoggedIn){
        //     return <div>Hello Anonymous</div>
        // } 
        // else{
        //     return <div>Hello Worm</div>
        // }
        // return (
        //     <div>
        //          <div>
        //              Welcome Anonymous
        //         </div>
        //         <div>
        //             Welcome Worm
        //         </div>
        //     </div>
        // )
    }
}

export default UserGreeting
