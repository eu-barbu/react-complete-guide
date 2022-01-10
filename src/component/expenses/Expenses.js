import './Expenses.css'
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList"
import {useState} from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const getFilteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={getFilteredExpenses}/>
            <ExpensesList expenses={getFilteredExpenses}/>
        </Card>
    );
}

export default Expenses;