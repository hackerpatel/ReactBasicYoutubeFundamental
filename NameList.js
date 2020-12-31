import React from 'react'
import Person from'./Person'

function NameList() {
    const names = ["Raj", "Rohan", "Naimesh", "Raj"]
    //const nameList = names.map(name => <h2>{name}</h2>)
    
    //Refactor the components into the seperate JSX
    const persons = [{
        id : 1,
        name : "Raj",
        age : 12,
        skill : "ReactJs"
    },
    {
        id : 2,
        name : "Rohan",
        age : 14,
        skill : "Angular"
    },
    {
        id : 3,
        name : "Naimesh",
        age : 20,
        skill : "Vue"
    }]
    //const personList = persons.map(person => <Person key ={person.id, person.name} person={person}/>)
    const nameList = names.map((name, index) => <h2 key = {index}>{index} {name}</h2>)
    return (
        <div>
        {
            nameList
            //nameList
            //names.map(name => <h2>{name}</h2>)
        }

          {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2>*/}
        </div>
    )
}

export default NameList
