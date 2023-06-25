import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const [title , setTitle] = useState(props.title);
  
  const clickHandler = () => {
    setTitle('Updated');
    console.log('Button Clicked!!!');
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click Here</button>
      {/* In button onClick handler we havent written clickHandler() because it will execute the funtion
       when jsx is evelusted rather than on clicking the button  */}
    </Card>
  );
}

export default ExpenseItem;