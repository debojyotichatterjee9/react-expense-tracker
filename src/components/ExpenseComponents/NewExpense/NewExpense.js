import React, { useState } from "react";
import "./NewExpense.css"

import ExpenseForm from "../ExpenseForm/ExpenseForm"


const NewExpense = props => {

    const [ expenseFormFlag, setExpenseFormFlag ] = useState(false)

    const createExpenseHandler = userInput => {
        const expenseData = {
            ...userInput,
            id: Math.round(Math.random(100)*100)
        }
        props.onAddExpense(expenseData)
        setExpenseFormFlag(!expenseFormFlag)
    }

    const formToggleHandeler = event => {
        setExpenseFormFlag(!expenseFormFlag)
    }
    return (
        <div className="new-expense">
            {expenseFormFlag 
            ? 
            <ExpenseForm onCreateExpense={createExpenseHandler} onCancel={formToggleHandeler}/>
            :
            <button onClick={formToggleHandeler}>Add New Expense</button>
            }
            
            
        </div>
    );
}

export default NewExpense;