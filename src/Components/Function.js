import React from 'react'
import './style.css';

export default function Function() {
    const myNew = { 
        color : "blue"
    }
    return (
        <div className='myFunction'>
            <h2>This is created using Functional Component</h2>
            <p className='mytag'>This is done using external CSS</p>
            <p style={myNew}>This is done using internal CSS</p>
        </div>
    )
}
