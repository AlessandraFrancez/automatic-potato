import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [filter, setFilter] = useState('2020');

  const onFilter = (year) => {
    setFilter(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filter={filter} onFilter={onFilter} />
        <ExpensesList list={props.list} filter={filter} />
      </Card>
    </div>
  );
}

export default Expenses;
