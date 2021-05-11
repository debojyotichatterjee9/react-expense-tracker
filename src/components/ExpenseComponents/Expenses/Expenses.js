import React, { useState } from 'react';
import './Expenses.css'
import Card from '../../UIComponents/Card/Card'
import ExpensesList from '../ExpensesList/ExpensesList'
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

    // setting the filter state value
    const yearFilterSelection = (userSelection) => {
        setFilterYear(userSelection)
    }
    
        return(
            <>
                <ExpensesFilter selected={filterYear} onYearSelection={yearFilterSelection}/>
                <Card className="expenses">
                    <ExpensesList expenses={filteredExpenses}/>
                </Card>
            </>
        );
    
}


export default Expenses