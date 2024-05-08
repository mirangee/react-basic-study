import React from 'react';
import styles from './HeaderCartButton.module.scss';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = () => {
  const { button, icon, badge } = styles; // 객체 디스트럭처링한 상태로 바로 지목해서 쓸 수 있다.
  return (
    <button className={button}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
