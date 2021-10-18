import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
  const { date, amount, title } = props;
  const [counter, setCounter] = useState(0);

  const plusHandler = () => {
    setCounter(counter + 1);
  };

  const minusHandler = () => {
    setCounter(counter - 1);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <p className="expense-item__price">Clicks {counter}</p>
          <div className="expense-item__price">{amount}</div>
        </div>
        <button className="expense-item__price" onClick={plusHandler}>
          +
        </button>
        <button className="expense-item__price" onClick={minusHandler}>
          -
        </button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
