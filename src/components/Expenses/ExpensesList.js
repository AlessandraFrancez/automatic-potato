import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
import ExpensesChart from './ExpensesChart';

const ExpensesList = (props) => {
  const filteredList = props.list.flatMap((item) =>
    item.date.getFullYear().toString() === props.filter
      ? [
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={item.id}
          />
        ]
      : []
  );

  const listArray = props.list.filter(
    (item) => item.date.getFullYear().toString() === props.filter
  );

  if (!filteredList.length) {
    return <p className="expenses-list__fallback">No expenses found.</p>;
  }

  return (
    <div>
      <ExpensesChart expenses={listArray} />
      <ul className="expenses-list">{filteredList}</ul>
    </div>
  );
};

export default ExpensesList;
