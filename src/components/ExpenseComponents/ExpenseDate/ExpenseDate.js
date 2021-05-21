import React from 'react';
import './ExpenseDate.css'


const ExpenseDate = props => {
    const expenseDate = props.date;
        return(
        <div className="expense-date">
            <div className="expense-date__month">{expenseDate.toLocaleString('en-US', {month: 'long'})}</div>
            <div className="expense-date__year">{expenseDate.getFullYear()}</div>
            <div className="expense-date__day">{expenseDate.toLocaleString('en-US', {day: '2-digit'})}</div>
        </div>
            
        );
    
}


export default ExpenseDate