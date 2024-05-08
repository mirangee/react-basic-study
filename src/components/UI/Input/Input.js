import React from 'react';
import styles from './Input.module.scss';
const Input = ({ input, label }) => {
  // 여러개의 데이터를 input이라는 객체 형태로 받겠다는 뜻
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
