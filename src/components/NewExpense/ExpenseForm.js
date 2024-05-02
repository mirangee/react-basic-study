import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpense }) => {
  const [userInput, setUserInput] = useState({
    title: '',
    price: '',
    date: '',
  });

  const titleChangeHandler = (e) => {
    // userInput이 객체 형태이기 때문에 기존값은 유지하면서
    // 이벤트가 발생한 입력창의 값만 변경하는 로직
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput, // spread 문법으로 기존 값은 그대로 복사
        title: e.target.value, // title만 변경
      };
    });
  };

  const priceChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      price: e.target.value,
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      date: e.target.value,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault(); //submit 차단(submit이 발동하면 동기 방식으로 요청을 보내므로 차단)

    const newExpense = {
      title: userInput.title,
      price: userInput.price,
      date: new Date(userInput.date),
    };

    onSaveExpense(newExpense); //부모 component인 App.js가 내려준 함수를 호출하면서, 올리고자 하는 데이터를 매개값으로 전달한다.

    // 입력창 리셋
    setUserInput({
      title: '',
      price: '',
      date: '',
    });
  };

  return (
    // form 태그의 경우 button type이 submit일 때 onSubmit 이벤트를 바로 걸 수 있다.
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="100"
            step="100"
            onChange={priceChangeHandler}
            value={userInput.price}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
