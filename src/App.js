import ExpenseItem from './components/ExpenseItem'

const App = props => {
    return (
      <div className="App">
        <h2>Refreshed</h2>
        <p>This is a sample text</p>
        <ExpenseItem/>
      </div>
    );
  }

  // class App extends React.Component {

  //   render = () => {

  //     return (

  //     <div className="App">
  //       <code>React App Page:</code>
  //       <hr/>
  //       </div>
      
  //     // React.createElement('div', {className: 'App'}, React.createElement('p', null, 'This is a test string'))
  //     )
  //   }
  // }

  export default App;