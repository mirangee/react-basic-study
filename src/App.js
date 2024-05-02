import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  //지출 항목 객체 배열

  const expenses = [
    {
      id: 1,
      title: '바나나',
      price: 2000,
      date: new Date(2023, 3 - 1, 23), // 자바스크립트의 날짜 객체는 0부터 시작하므로 3월을 표현하려면 2를 입력
    },
    {
      id: 2,
      title: 'BBQ치킨',
      price: 20000,
      date: new Date(2022, 5 - 1, 21),
    },
    {
      id: 3,
      title: '도미노피자',
      price: 35000,
      date: new Date(2021, 7 - 1, 4),
    },
    {
      id: 4,
      title: '엽기떡볶이',
      price: 18000,
      date: new Date(2024, 5 - 1, 1),
    },
  ];

  // 지출 객체배열을 상태변수로 관리
  const [expenseList, setExpenseList] = useState(expenses);

  // ExpenseForm에게 내려보낼 함수
  const addExpenseHandler = (newExpense) => {
    console.log('App 컴포넌트에서 응답함!');
    console.log(`newExpense: `, newExpense);

    const modifyExpense = {
      ...newExpense,
      id: expenseList[expenseList.length - 1].id + 1,
    };
    console.log(modifyExpense);

    setExpenseList([...expenseList, modifyExpense]); // 기존 배열을 유지한 상태에서 새로운 배열 추가해야 함
  };

  return (
    <>
      {/* 자바스크립트에서는 함수도 객체이다. 이렇게 함수를 전달하면 함수의 주소값을 가진 객체가 전달된다. */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseList} />
      {/* 상태변수인 expenseList를 전달해야 새롭게 렌더링이 된다 */}
    </>
  );
}

export default App;
