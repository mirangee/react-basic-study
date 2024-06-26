import React, { useContext } from 'react';
import styles from './CartItem.module.scss';
import CartContext from '../../store/cart-context';

const CartItem = ({ cart }) => {
  const { id, name, price, amount } = cart;
  const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

  const { addItem, removeItem } = useContext(CartContext);

  // + 버튼 누르면 무조건 하나만 올려주면 된다
  const cartAddItemHandler = () => {
    // addItem은 앞에서 작성한 담기 기능에 사용한 함수
    // 지금은 항목 추가가 아닌, 기존 항목의 수량만 하나 늘리려는 것
    addItem({ ...cart, amount: 1 });
  };

  // - 버튼 누르면 하나씩 내려주면 된다.
  const cartRemoveItemHandler = () => {
    removeItem(id);
  };

  const {
    'cart-item': cartItem,
    summary,
    price: priceStyle,
    amount: amountStyle,
    actions,
  } = styles;
  return (
    <li className={cartItem}>
      <div>
        <h2>{name}</h2>
        <div className={summary}>
          <span className={priceStyle}>{formatPrice}</span>
          <span className={amountStyle}> x {amount}</span>
        </div>
      </div>
      <div className={actions}>
        <button onClick={cartRemoveItemHandler}>-</button>
        <button onClick={cartAddItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
