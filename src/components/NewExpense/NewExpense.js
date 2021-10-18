import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const onSaveHandler = (data) => {
    data = {
      ...data,
      id: Math.random().toString()
    }

    props.onNewExpense(data)
    console.log(data)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSave={onSaveHandler}/>
    </div>
  )
}

export default NewExpense;
