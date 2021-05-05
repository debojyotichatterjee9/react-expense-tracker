import './ExpenseItem.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate'


// function ExpenseItem (props) {
//     const expenses = props.expenses;
//     console.log(expenses)
//     for(const item of expenses) {
//         console.log(item)
//         const expenseDate = item.date;
//         return(
//         <div className="expense-item">
//             <div>{expenseDate.toDateString()}</div>
//             <div className="expense-item__description">
//                 <h2>{item.title}</h2>
//                 <div className="expense-item__price">${item.amount}</div>
//             </div>
//         </div>
//         );
//     }
    
// }


function ExpenseItem (props) {
    const expenseDate = props.date;
        return(
        <div className="expense-item">
            <ExpenseDate date={expenseDate}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
        );
    
}


export default ExpenseItem