import React from 'react';
import Expenses from './components/ExpenseComponents/Expenses/Expenses'
import NewExpense from "./components/ExpenseComponents/NewExpense/NewExpense"


/**
  * This is how we can create a functional component
  **/

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
        <NewExpense />
        <Expenses expenses={expenses}/>
      </div>
    );


    /**
      * This is how react creates the HTML elements undet the hood.
      * This is the reason why we needed to import React in every component
      * in the older versions. Now React does the same by itself.
      **/

    // return React.createElement(
    //     'div',
    //     {},
    //     React.createElement('h2', {}, 'Les get started'),
    //     React.createElement(Expenses, {expenses: expenses})
    //   );
  }


/**
  * This is how we can create a class based component
  * extending from React.Component
  **/

  // class App extends React.Component {


  //   render = () => {

  //   const expenses = [
  //   {
  //     id: 'e1',
  //     title: 'Printer Paper',
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { 
  //     id: 'e2', 
  //     title: 'New TV', 
  //     amount: 799.49, 
  //     date: new Date(2021, 2, 12) },
  //   {
  //     id: 'e3',
  //     title: 'Car Insurance',
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: 'e4',
  //     title: 'New Desk (Wooden)',
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];


  //     return (

  //     <div className="App">
  //       <h2>Refreshed</h2>
  //       <p>This is a sample text</p>
  //       <Expenses expenses={expenses}/>
  //     </div>
      
  //     // React.createElement('div', {className: 'App'}, React.createElement('p', null, 'This is a test string'))
  //     )
  //   }
  // }

  export default App;