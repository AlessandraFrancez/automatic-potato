import { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const showColor = (invalidOption = 'red', validOption = 'black') => {
    return !isValid ? invalidOption : validOption;
  };
  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: showColor() }}>Course Goal</label>
        <input
          type="text"
          style={{
            borderColor: showColor(),
            background: showColor('salmon', 'transparent')
          }}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
