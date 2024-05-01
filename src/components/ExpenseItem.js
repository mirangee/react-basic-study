import React from 'react'
import './ExpenseItem.css';

const ExpenseItem = ({title, price, date}) => {

  // 한 자리 수를 두 자리로 변환해 주는 함수
  const make2digit = (text) => {
    return text.toString().padStart(2, '0');
    // padStart(원하는 길이, 그 길이가 아니면 넣을 문자열) : ES8 문법으로 padStart는 앞에, padEnd는 뒤에 문자열을 붙인다
  
  }

  // 날짜 String으로 포매팅 변환 함수 정의
  const makeFormattedDate = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  }

  // 숫자를 화폐 표기법으로 바꾸기
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(price); // 30,000원 이런식으로 표현

  return (
    <div className='expense-item'>
      <div>{makeFormattedDate()}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2> 
        <div className='expense-item__price'>{formattedPrice}원</div>
      </div>
    </div>
  )
}

export default ExpenseItem;