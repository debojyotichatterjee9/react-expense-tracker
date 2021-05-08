import React from "react";
import "./NewExpense.css"

import ExpenseForm from "../ExpenseForm/ExpenseForm"


const NewExpense = props => {

    const createExpenseHandler = userInput => {
        const expenseData = {
            ...userInput,
            id: Math.round(Math.random(100)*100)
        }
        props.onAddExpense(expenseData)
    }


    return (
        <div className="new-expense">
            <ExpenseForm onCreateExpense={createExpenseHandler}/>
        </div>
    );
}

export default NewExpense;