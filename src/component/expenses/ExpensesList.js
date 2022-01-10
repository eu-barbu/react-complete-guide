import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {

    if (props.expenses.length === 0){
        return <h2 className='expenses-list__fallback'>No expenses found.</h2>;
    }

    const getFormattedExpenseItem = (expense) => {
        return <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    };

    if (props.expenses.length > 0){
        return <ul className='expenses-list'>
            {props.expenses.map(getFormattedExpenseItem)}
        </ul>
    }

};

export default ExpensesList;