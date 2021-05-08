import React, { useState } from 'react'
import './ExpenseItem.css';
import Card from '../../UIComponents/Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

/**
  * Add an edit expense item functionality at a later stage.
  **/
const ExpenseItem = props => {

    const [data, setData] = useState(props);
    
    const expenseDate = data.date;

        return(
        <Card className="expense-item">
            <ExpenseDate date={expenseDate}/>
            <div className="expense-item__description">
                <h2>{data.title}</h2>
                <div className="expense-item__price">${data.amount}</div>
            </div>
        </Card>
        );
    
}


export default ExpenseItem