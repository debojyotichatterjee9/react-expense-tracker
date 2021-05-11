import React, { useState } from 'react';
import './Expenses.css'
import Card from '../../UIComponents/Card/Card'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'

const Expenses = props => {
    console.log('********************************************************');
    console.log(props)
    const [ filterYear, setFilterYear ] = useState("2021")
    const expenses = props.expenses
    
    const elemArray = expenses.map( item => {
        return <ExpenseItem key={item.id} id={item.id} date={item.date} title={item.title} amount={item.amount}/>
    });

    const yearFilterSelection = (userSelection) => {
        setFilterYear(userSelection)
        console.log(filterYear)
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