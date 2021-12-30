import React, { Component } from 'react'
import './style.css';
export default class Class extends Component {
    render(){
        const myNew = {
            color: "blue"
        }
        return (
            <div className='myClass'>
                <h2>This is created using Class Component</h2>
                <p className='mytag'>This is done using external CSS</p>
                <p style={myNew}>This is done using internal CSS</p>
            </div>
        )
    }
}
