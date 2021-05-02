import React from 'react'
const UserInput = (props) => {
    return (
    <div>
        <h4>UserInput</h4>
        <input 
        type='text' 
        placeholder='Enter username here'
        onChange={props.udpateUname}
        defaultValue={props.uname}/>
    </div>
    )
}

export default UserInput;