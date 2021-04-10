import React from 'react'
const Person = (props) => {
    return (
    <div>
        <p>This person's name is {props.name}...with random number {props.number}</p>
        <p onClick={props.click}>{props.children}</p>
        <input type="text" onChange={props.nameChange} defaultValue={props.name}/>
    </div>
    )
}

export default Person;