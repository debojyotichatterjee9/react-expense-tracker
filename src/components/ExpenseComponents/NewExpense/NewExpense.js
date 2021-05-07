import React from "react";
import "./NewExpense.css"

import ExpenseForm from "../ExpenseForm/ExpenseForm"


const NewExpense = props => {

    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    );
}

export default NewExpense;