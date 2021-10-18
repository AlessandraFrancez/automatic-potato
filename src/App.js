import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const list = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 200.01,
      date: new Date(2021, 2, 13),
    },
    {
      id: "e2",
      title: "Mouse",
      amount: 350.21,
      date: new Date(2020, 5, 27),
    },
    {
      id: "e3",
      title: "Keyboard",
      amount: 799.99,
      date: new Date(2021, 7, 5),
    },
  ];

  const [expenseList, setList] = useState(list);

  const addExpenseHandler = (data) => {
    setList((prevState) => {
      return [data, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onNewExpense={addExpenseHandler} />
      <Expenses list={expenseList} />
    </div>
  );
}

export default App;
