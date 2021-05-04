import './ExpenseItem.css'
export default function ExpenseItem () {
    return(
        <div className="expense-item">
            <div>March 20, 2021</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">1294.67</div>
            </div>
        </div>
        )
}