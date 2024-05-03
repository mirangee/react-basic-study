import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import styles from './AddUsers.module.css';
import Card from '../UI/Card';
import ErrorModal from '../UI/Modal/ErrorModal';

const AddUsers = () => {
  const [userValue, setUserValue] = useState({
    userName: '',
    age: '',
  });

  //에러 상태 관리
  const [error, setError] = useState(null);

  const userNameChangeHandler = (e) => {
    setUserValue((prevUserValue) => {
      return {
        ...prevUserValue,
        userName: e.target.value,
      };
    });
  };

  const ageChangeHandler = (e) => {
    setUserValue((prevUserValue) => {
      return {
        ...prevUserValue,
        age: e.target.value,
      };
    });
  };

  const userSubmitHandler = (e) => {
    e.preventDefault();

    if (userValue.userName.trim() === '' || userValue.age.trim() === '') {
      setError({
        title: '유효하지 않은 입력값',
        message: '입력값이 공백입니다. 내용을 적어주세요',
      });
      return;
    }

    if (+userValue.age < 1) {
      setError({
        title: '유효하지 않은 나이의 범위',
        message: '나이의 입력값은 1 이상이어야 합니다',
      });
      return;
    }

    console.log(userValue);

    setUserValue({
      userName: '',
      age: '',
    });
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={() => setError(null)}
        />
      )}
      <Card className={styles.input}>
        <form className={styles.input} onSubmit={userSubmitHandler}>
          <label htmlFor="username">이름</label>
          <input
            id="username"
            type="text"
            onChange={userNameChangeHandler}
            value={userValue.userName}
          />
          <label htmlFor="age">나이</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={userValue.age}
          />
          <Button type="submit">가입하기</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
