import React from 'react'
import './Person.css'
const Person = (props) => {
    return (
    <div className='Person'>
        <p>This person's name is {props.name}...with random number {props.number}</p>
        <p onClick={props.click}>{props.children}</p>
        <input type='text' onChange={props.nameChange} defaultValue={props.name}/>
    </div>
    )
}

export default Person;