import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';

const ExpenseItem = ({ title, price, date }) => {
  // 숫자를 화폐 표기법으로 바꾸기
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(price); // 30,000원 이런식으로 표현

  // 값이 변경되어 화면에 반영되어야 하는 값들은
  // useState 훅을 통해 상태변수로 관리해야 한다.
  // (훅: 리액트에서 직접 코드 작성 없이 다양한 기능을 사용할 수 있게 도와주는 자체 제공 라이브러리)

  // useState(상태변수의 초기값) -> 배열 리턴하는데 객체 디스트럭처링으로 쪼개서 받는다.
  // 첫번째 요소는 관리할 상태값
  // 두번째 요소는 상태값을 변경하는 setter 함수가 리턴됨. 대입 변경은 허용하지 않으므로 무조건 setter 호출
  const [itemTitle, setItemTitle] = useState(title); //초기값 전달(0이나 null, 빈문자열도 가능)

  const clickHandler = (e) => {
    // state로 관리하는 변수는 반드시 setter로만 변경해야 한다. 안 그러면 변경 감지가 안 된다.

    setItemTitle((snapshot) => {
      console.log('snapshot: ', snapshot);
      // setter 함수의 매개값으로 콜백 함수를 선언. -> 콜백 함수의 매개값으로 현재 상태 변수 값이 전달됨.
      // return 값이 변경될 상태값으로 지정.
      // return 값이 snapshot과 다를 경우에 화면이 리렌더링, 같을 경우 리렌더링 하지 않음
      // 이 방식이 React 공식 문서에서 권장하는 방법이 이렇게 콜백함수로 처리하는 방법임.
      return '메롱메롱~!!';
    });

    //setItemTitle('메롱메롱');
  };

  return (
    <Card className="circle">
      <div className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{itemTitle}</h2>
          <div className="expense-item__price">{formattedPrice}원</div>
        </div>
      </div>
      <button onClick={clickHandler}>수정</button>
      <button
        onClick={(e) => {
          console.log('삭제 버튼 이벤트 발생!');
        }}
      >
        삭제
      </button>
    </Card>
  );
};

export default ExpenseItem;
