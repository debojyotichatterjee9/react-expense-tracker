import React, { useState } from "react";
import "./ExpenseForm.css"

const ExpenseForm = props => {

    const [userInput, setUserInput] = useState({
        titleInput: "",
        amountInput: "",
        dateInput: "",
    })

    
    const inputChangeHandler = (event) => {
        
        // setUserInput({
        //     ...userInput,
        //     [event.target.id]: event.target.value
        // })
        
        /**
          * The previous method would work fine 
          * in most of the cases but as react schedules
          * the state updation, it is sometimes possible that 
          * the previous state variable snapshot it is using is an old or outdated one.
          **/

        setUserInput(prevState => {
            return {
                ...prevState,
                [event.target.id]: event.target.value
            }
        })

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
                            onChange={inputChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="amountInput">Amount</label>
                        <input 
                            id="amountInput" 
                            placeholder="Enter the amount..."
                            type="number" 
                            min="0.01" 
                            step="0.01" 
                            onChange={inputChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="dateInput">Date</label>
                        <input 
                            id="dateInput" 
                            type="date" 
                            min="2020-12-31" 
                            onChange={inputChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add</button>
                </div>
            </form>
        );
}

export default ExpenseForm