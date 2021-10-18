import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filter, setFilter] = useState("2020");

  const onFilter = (year) => {
    console.log(year);
    setFilter(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filter={filter} onFilter={onFilter} />
        {props.list.map((item, index) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={index}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
