import React, { useState } from 'react';
import './App.css';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';

const DUMMY_DATA = [
  {
    id: 'g1',
    text: '리액트 컴포넌트 스타일 마스터하기',
  },
  {
    id: 'g2',
    text: 'UI 프로그래밍 고수되기',
  },
];

const App = () => {
  const [goals, setGoals] = useState(DUMMY_DATA);

  // input에게 전달할 함수
  const addGoalHandler = (text) => {
    // console.log('전달받은 텍스트: ', text);
    const newGoal = {
      id: Math.random().toString(),
      text,
    };

    // 상태변수(배열)를 수정
    // setGoals([...goals, newGoal]);
    setGoals((prevGoals) => [...goals, newGoal]);
  };

  // 삭제 이벤트 핸들러를 CourseItem에게 전달해야 함 (클릭하면 삭제하도록)
  const deleteGoalHandler = (id) => {
    // console.log('전달 받은 id', id);
    // 1. splice로 해당 id 항목 삭제하기
    // const updateGoals = [...goals]; //상태 배열 그대로 복사해서 가져옴
    // const index = updateGoals.findIndex((goal) => goal.id === id);
    // updateGoals.splice(index, 1);
    // setGoals(updateGoals);

    // 2. filter 고차 함수로 id 항목 뺀 배열만 취하기
    setGoals(goals.filter((goal) => goal.id !== id));

    // 내가 작성한 콜백함수 스타일
    // setGoals((prevGoals) => {
    //   return prevGoals.filter((item) => {
    //     if (item.id !== id) {
    //       return item;
    //     } else {
    //       return null;
    //     }
    //   });
    // });
  };

  // CourseList에 조건부 렌더링
  let listContent = (
    <p style={{ color: 'red', fontSize: '2em', textAlign: 'center' }}>
      목표를 등록해 주세요
    </p>
  );

  if (goals.length > 0) {
    listContent = <CourseList items={goals} onDelete={deleteGoalHandler} />;
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAdd={addGoalHandler} />
      </section>
      <section id="goals">{listContent}</section>
    </div>
  );
};

export default App;
