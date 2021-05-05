import './ExpenseDate.css'


function ExpenseDate (props) {
    const expenseDate = props.date;
        return(
        <div>
            <div>{expenseDate.toLocaleString('en-US', {month: 'long'})}</div>
            <div>{expenseDate.getFullYear()}</div>
            <div>{expenseDate.toLocaleString('en-US', {day: '2-digit'})}</div>
        </div>
            
        );
    
}


export default ExpenseDate