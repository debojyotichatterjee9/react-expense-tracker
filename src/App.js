import Expenses from './components/Expenses/Expenses'

const App = props => {

  const expenses = [
    {
      id: 'e1',
      title: 'Printer Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

    return (
      <div className="App">
        <h2>Refreshed</h2>
        <p>This is a sample text</p>
        <Expenses expenses={expenses}/>
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