import './Expenses.css'
import Card from '../Card/Card'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

function Expenses (props) {
    const expenses = props.expenses
    
    const elemArray = expenses.map( item => {
        return <ExpenseItem key={item.id} date={item.date} title={item.title} amount={item.amount}/>
    });
        return(
            <Card className="expenses">
                {elemArray}
            </Card>
        );
    
}


export default Expenses