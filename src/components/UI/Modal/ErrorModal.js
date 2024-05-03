import React from 'react';
import styles from './ErrorModal.module.css';
import Card from '../Card';
import Button from '../Button/Button';

// Modal을 사용하는 쪽에서 모달 제목과 메시지가 props로 전달될 것이다.
// onConfirm -> AddUsers 쪽에서 상태관리하고 있는 모달 노출 여부 제어 함수
// onConfirm 함수가 호출되면 상태관리 변수가 null 값이 된다.
const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
