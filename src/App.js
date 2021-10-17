import "./App.css";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const list = [
    {
      title: "Toilet Paper",
      amount: 200.01,
      date: new Date(2021, 2, 13),
    },
    {
      title: "Mouse",
      amount: 350.21,
      date: new Date(2021, 5, 27),
    },
    {
      title: "Keyboard",
      amount: 799.99,
      date: new Date(2021,7, 5),
    },
  ];

  return (
    <div>
      <Expenses list={list}/>
    </div>
  );
}

export default App;
