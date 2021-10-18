import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

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

  if (!filteredList.length) {
    return <p className="expenses-list__fallback">No expenses found.</p>;
  }

  return <ul className="expenses-list">{filteredList}</ul>;
};

export default ExpensesList;
