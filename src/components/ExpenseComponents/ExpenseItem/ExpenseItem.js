import { useState } from 'react'
import './ExpenseItem.css';
import Card from '../../UIComponents/Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';


const ExpenseItem = props => {

    const [title, setTitle] = useState(props.title)
    
    const expenseDate = props.date;

        return(
        <Card className="expense-item">
            <ExpenseDate date={expenseDate}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button style={{"cursor": "pointer"}} onClick={() => setTitle(Math.round(Math.random(100)*100))}>Change Title</button>
        </Card>
        );
    
}


export default ExpenseItem