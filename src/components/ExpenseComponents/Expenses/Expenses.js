import React, { useState } from 'react';
import './Expenses.css'
import Card from '../../UIComponents/Card/Card'
import ExpensesList from '../ExpensesList/ExpensesList'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import ExpensesChart from '../ExpensesChart/ExpensesChart'

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
                <Card className="expenses">
                <ExpensesFilter selected={filterYear} onYearSelection={yearFilterSelection}/>
                <ExpensesChart expenses={filteredExpenses}/>
                    <ExpensesList expenses={filteredExpenses}/>
                </Card>
            </>
        );
    
}


export default Expenses