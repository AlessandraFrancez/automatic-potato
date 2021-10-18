import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
  const [showButton, setShowButton] = useState(true);
  const onSaveHandler = (data) => {
    data = {
      ...data,
      id: Math.random().toString(),
    };

    props.onNewExpense(data);
    buttonHandler();
  };

  const buttonHandler = () => {
    setShowButton((prevState) => !prevState);
  };

  return (
    <div className="new-expense">
      {showButton ? (
        <button onClick={buttonHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSave={onSaveHandler}
          onCancel={buttonHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
