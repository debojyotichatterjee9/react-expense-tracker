import React from 'react';
import "./ExpensesList.css"
import ExpenseItem from '../ExpenseItem/ExpenseItem'


const ExpensesList = props => {
    
    const filteredExpenses = props.expenses;

    // creating list items to render
    const elemArray = filteredExpenses.map( item => {
        return <ExpenseItem key={item.id} id={item.id} date={item.date} title={item.title} amount={item.amount}/>
    });

    if(filteredExpenses.length === 0) {
        return (
            <h2 className="expenses-list__fallback">
                No expenses added for current selection. Add one to view.
            </h2>
        )
    }

    return (
        <ul className="expenses-list">
            {elemArray}
        </ul>
    );
}

export default ExpensesList;