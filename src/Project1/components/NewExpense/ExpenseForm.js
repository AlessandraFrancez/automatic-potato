import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  // Individual states per field
  // const [title, setTitle] = useState('');
  // const [amount, setAmount] = useState(0);
  // const [date, setDate] = useState();

  // One state with a single object
  const [input, setUserInput] = useState({
    title: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
  });

  const onChangeHandler = (action, event) => {
    // Not recommended
    // setUserInput({ ...input, [action]: event.target.value });

    // Use previous state like this
    setUserInput((prevState) => {
      return { ...prevState, [action]: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
      ...input,
      amount: +input.amount,
      date: new Date(input.date),
    };

    setUserInput({
      date: new Date().toISOString().split('T')[0],
      title: '',
      amount: '',
    });

    props.onSave(expenseDate);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(event) => onChangeHandler('title', event)}
            value={input.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) =>
              onChangeHandler('amount', event)
            }
            value={input.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2021-12-31"
            onChange={(event) => onChangeHandler('date', event)}
            value={input.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
