import './App.css';
import Expenses from "./component/expenses/Expenses";
import NewExpense from "./component/newExpense/NewExpense";
import {useState} from "react";

const INITIAL_DATA =
    [
        {
            key: 'e1',
            title: 'Car Insurance',
            amount: '297.64',
            date: new Date(2019, 5, 17)
        },
        {
            key: 'e2',
            title: 'Toilet paper',
            amount: '15.24',
            date: new Date(2021, 3, 15)
        },
        {
            key: 'e3',
            title: 'Books',
            amount: '34.25',
            date: new Date(2021, 7, 7)
        },
        {
            key: 'e4',
            title: 'Food',
            amount: '15.34',
            date: new Date(2022, 1, 5)
        }
    ];

function App() {
    const [expenses, setExpenses] = useState(INITIAL_DATA);

    const addExpenseHandler = expense => {
        setExpenses((previousExpenses)=>{
            return [expense, ...previousExpenses];
        });
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
