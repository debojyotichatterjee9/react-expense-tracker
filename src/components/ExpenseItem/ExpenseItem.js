import './ExpenseItem.css';
import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';


function ExpenseItem (props) {
    const expenseDate = props.date;
        return(
        <Card className="expense-item">
            <ExpenseDate date={expenseDate}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
        );
    
}


export default ExpenseItem