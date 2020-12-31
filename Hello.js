import React from 'react'

const Hello = () => {
    //with the use of Jsx that means using HTML and javascript functions
    // return (
    //     <div className='DummyClass'>
    //         <h1>Hello Anonymous</h1>
    //     </div>
    // )

    //Without using jsx
    return React.createElement('div', {id: 'Hello', className: 'DummyClass'}, React.createElement('h1', null, 'Hello Anonymous') )
}

export default Hello