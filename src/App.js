// import React, { useState } from 'react';
import React from 'react';
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
        },
        {
          name: "Jack",
          number: 84,
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
    this.setState({
      persons: updatedPerson
    })
  }

  resetNumberHandler = (resetValue) => {
    const updatedPerson = this.state.persons.map(person => ({
      name: person.name,
      number: resetValue
    }));
    this.setState({
      persons: updatedPerson
    })
  }

  removeNameHandler = (maskValue) => {
    const updatedPerson = this.state.persons.map(person => ({
      name: maskValue,
      number: person.number
    }));
    this.setState({
      persons: updatedPerson
    })
  }

  updateNameHandler = (event) => {
    console.log(event)
    const updatedPerson = this.state.persons.map(person => ({
      name: event.target.value,
      number: person.number
    }));
    this.setState({
      persons: updatedPerson
    })
  }

    render = () => (
      <div className="App">
        <code>React App Page:</code>
        <hr />
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <Person 
        name={this.state.persons[0].name} 
        number={this.state.persons[0].number}
        nameChange={this.updateNameHandler}
        />
        <Person 
        name={this.state.persons[1].name} 
        number={this.state.persons[1].number} 
        nameChange={this.updateNameHandler}
        />
        <Person 
        name={this.state.persons[2].name} 
        number={this.state.persons[2].number} 
        nameChange={this.updateNameHandler}
        />
        <Person 
        name={this.state.persons[3].name} number={this.state.persons[3].number}
        click={this.increaseNumberHandler.bind(this)}
        nameChange={this.updateNameHandler}
        >Click here to increase number.</Person>
        <Person 
        name={this.state.persons[4].name} number={this.state.persons[4].number}
        click={this.resetNumberHandler.bind(this, 0)}
        >Click here to reset all numbers.</Person>
        <Person 
        name={this.state.persons[5].name} number={this.state.persons[5].number}
        click={() => this.removeNameHandler("XXX")}
        >Click here to remove all the names.</Person>
      </div>
      
      // React.createElement('div', {className: 'App'}, React.createElement('p', null, 'This is a test string'))
    )
  }

  export default App;