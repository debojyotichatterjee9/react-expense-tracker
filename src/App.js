import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

// const App = props => {

//   const [personState, setPersonState] = useState({
//     persons: [
//       {
//         name: "Mary",
//         age: 34,
//       },
//       {
//         name: "John",
//         age: 25,
//       },
//       {
//         name: "Carol",
//         age: 30,
//       },
//       {
//         name: "Juilan",
//         age: 28,
//       }
//     ],
//     zones: [
//       {
//         name: "India",
//         code: "IN"
//       },
//       {
//         name: "America",
//         code: "US"
//       }
//     ]
//   });

//   const switchNameHandler = () => {
//     setPersonState({
//       persons: personState.persons.reverse()
//     })
//   }
//   console.log(personState)
//     return (
//       <div className="App">
//         <code>React App Page:</code>
//         <hr />
//         <button onClick={switchNameHandler}>Switch Names</button>
//         <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//         <Person name={personState.persons[1].name} age={personState.persons[1].age} />
//         <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
//         <Person 
//         name={personState.persons[3].name} age={personState.persons[3].age}
//         click={switchNameHandler}        
//         >Click here to reverse.</Person>
//       </div>
//     );
//   }

  class App extends React.Component {

    state = {
      persons: [
        {
          name: "Mary",
          age: 34,
        },
        {
          name: "John",
          age: 25,
        },
        {
          name: "Carol",
          age: 30,
        },
        {
          name: "Juilan",
          age: 28,
        }
      ]
    }

  switchNameHandler = () => {
    this.setState({
      persons: this.state.persons.reverse()
    })

    console.log(this.state.persons)
  }

    render = () => (
      <div className="App">
        <code>React App Page:</code>
        <hr />
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person 
        name={this.state.persons[3].name} age={this.state.persons[3].age}
        click={this.switchNameHandler}
        >Click here to reverse.</Person>
      </div>
      // React.createElement('div', {className: 'App'}, React.createElement('p', null, 'This is a test string'))
    )
  }

  export default App;