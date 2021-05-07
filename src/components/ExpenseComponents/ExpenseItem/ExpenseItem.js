import React, { useState } from 'react'
import './ExpenseItem.css';
import Card from '../../UIComponents/Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';


const ExpenseItem = props => {

    const [data, setData] = useState(props);
    
    const expenseDate = data.date;

    const updateTitle = (data) => {
        setData({
            id: data.id,
            title: Math.round(Math.random(100)*100),
            amount: data.amount,
            date: new Date()
        });
    }

        return(
        <Card className="expense-item">
            <ExpenseDate date={expenseDate}/>
            <div className="expense-item__description">
                <h2>{data.title}</h2>
                <div className="expense-item__price">${data.amount}</div>
            </div>
            <button style={{"cursor": "pointer"}} onClick={() => updateTitle(data)}>Change Title</button>
        </Card>
        );
    
}


export default ExpenseItem