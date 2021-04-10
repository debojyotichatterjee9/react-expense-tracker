import React, { useState } from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
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
          number: 34,
        },
        {
          name: "John",
          number: 25,
        },
        {
          name: "Carol",
          number: 30,
        },
        {
          name: "Juilan",
          number: 28,
        },
        {
          name: "Madeline",
          number: 35,
        }
      ]
    }

  switchNameHandler = () => {
    this.setState({
      persons: this.state.persons.reverse()
    })
    console.log(this.state.persons)
  }

  increaseNumberHandler = () => {
    const updatedPerson = this.state.persons.map(person => ({
      name: person.name,
      number: person.number + 1
    }));
    console.log(updatedPerson)
    this.setState({
      persons: updatedPerson
    })
  }

  resetNumberHandler = (maskValue) => {
    const updatedPerson = this.state.persons.map(person => ({
      name: person.name,
      number: maskValue
    }));
    console.log(updatedPerson)
    this.setState({
      persons: updatedPerson
    })
  }

    render = () => (
      <div className="App">
        <code>React App Page:</code>
        <hr />
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <Person name={this.state.persons[0].name} number={this.state.persons[0].number} />
        <Person name={this.state.persons[1].name} number={this.state.persons[1].number} />
        <Person name={this.state.persons[2].name} number={this.state.persons[2].number} />
        <Person 
        name={this.state.persons[3].name} number={this.state.persons[3].number}
        click={this.increaseNumberHandler.bind(this)}
        >Click here to increase number.</Person>
        <Person 
        name={this.state.persons[4].name} number={this.state.persons[4].number}
        click={this.resetNumberHandler.bind(this, 0)}
        >Click here to reset all numbers.</Person>
      </div>
      
      // React.createElement('div', {className: 'App'}, React.createElement('p', null, 'This is a test string'))
    )
  }

  export default App;