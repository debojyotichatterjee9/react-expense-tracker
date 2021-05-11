import React, { useState } from 'react';
import './Expenses.css'
import Card from '../../UIComponents/Card/Card'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'

const Expenses = props => {
    const [ filterYear, setFilterYear ] = useState("All")
    // setting the filtered array
    let filteredExpenses = []
    
    if(filterYear === "All") {
        // showing all the expenses
        filteredExpenses = props.expenses
    }
    else {
        // filtering expenses according to the year
        filteredExpenses = props.expenses.filter(item => item.date.getFullYear().toString() === filterYear)
    }

    // creating list items to render
    const elemArray = filteredExpenses.map( item => {
        return <ExpenseItem key={item.id} id={item.id} date={item.date} title={item.title} amount={item.amount}/>
    });

    // setting the filter state value
    const yearFilterSelection = (userSelection) => {
        setFilterYear(userSelection)
    }
    
        return(
            <>
                <ExpensesFilter selected={filterYear} onYearSelection={yearFilterSelection}/>
                <Card className="expenses">
                    {elemArray}
                </Card>
            </>
        );
    
}


export default Expenses