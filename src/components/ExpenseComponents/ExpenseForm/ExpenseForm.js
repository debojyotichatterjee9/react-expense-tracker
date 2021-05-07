import React, { useState } from "react";
import "./ExpenseForm.css"

const ExpenseForm = props => {

    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }
    return (
            <form action="">
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="titleInput">Title</label>
                        <input 
                            id="titleInput" 
                            placeholder="Enter a title..."
                            type="text" 
                            onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="amountInput">Amount</label>
                        <input 
                            id="amountInput" 
                            type="number" 
                            min="0.01" 
                            step="0.01" 
                            onChange={amountChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="dateInput">Date</label>
                        <input 
                            id="dateInput" 
                            type="date" 
                            min="2020-12-31" 
                            onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add</button>
                </div>
            </form>
        );
}

export default ExpenseForm