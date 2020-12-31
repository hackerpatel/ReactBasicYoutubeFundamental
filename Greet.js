import React from 'react'

// function Greet(){
//     return <h1>Hello Anonymous</h1>
// }

//using arrow function
const Greet = (props) => {
    const {name, heroName} = props
    return(
        <div>
            <h1>
                Hello {name} also known as {heroName}
            </h1>
            {/*{props.children}*/}
        </div>
)  
}
export default Greet