import React from 'react'
const Person = (props) => {
    return (
    <div>
        <p>This person's name is {props.name}...with random number {props.age}</p>
        <p>{props.children}</p>
    </div>
    )
}

export default Person;