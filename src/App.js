import React from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  //지출 항목 객체 배열

  const expenses = [
    {
      title: '바나나',
      price: 2000,
      date: new Date(2023, 3 - 1, 23), // 자바스크립트의 날짜 객체는 0부터 시작하므로 3월을 표현하려면 2를 입력
    },
    {
      title: 'BBQ치킨',
      price: 20000,
      date: new Date(2023, 5 - 1, 21),
    },
    {
      title: '도미노피자',
      price: 35000,
      date: new Date(2023, 7 - 1, 4),
    },
  ];

  // ExpenseForm에게 내려보낼 함수
  const addExpenseHandler = (newExpense) => {
    console.log('App 컴포넌트에서 응답함!');
    console.log(`newExpense: `, newExpense);
  };

  return (
    <>
      {/* 자바스크립트에서는 함수도 객체이다. 이렇게 함수를 전달하면 함수의 주소값을 가진 객체가 전달된다. */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
