import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'

function Expenses(props) {
  const { list } = props;

  const jsx = list.map(item => <ExpenseItem title={item.title} amount={item.amount} date={item.date} />);

  return (
    <Card className="expenses">
      {jsx}
    </Card>
  );
}

export default Expenses;
