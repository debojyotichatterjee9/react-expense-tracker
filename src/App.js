import React from 'react';
import './App.css';

import Person from './Person/Person';

// function App() {
//   return (
//     <div className="App">
//       <code>React App Page:</code>
//     </div>
//   );
// }

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
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>I have seen her on TV.</Person>
      <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
    </div>
    // React.createElement('div', {className: 'App'}, React.createElement('p', null, 'This is a test string'))
  )
}

export default App;