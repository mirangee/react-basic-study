import React, { useContext } from 'react';
import styles from './HeaderCartButton.module.scss';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = ({ onShow }) => {
  const { button, icon, badge } = styles; // 객체 디스트럭처링한 상태로 바로 지목해서 쓸 수 있다.

  const { items } = useContext(CartContext);
  const numberOfCart = items.reduce((accu, item) => accu + item.amount, 0); // 장바구니에 넣은 항목 전체 수
  return (
    <button className={button} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;
