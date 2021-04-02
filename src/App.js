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
  render = () => (
      <div className="App">
       <code>React App Page:</code>
       <Person />
     </div>
     // React.createElement('div', {className: 'App'}, React.createElement('p', null, 'This is a test string'))
    )
}

export default App;