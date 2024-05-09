import React, { useContext, useEffect, useState } from 'react';
import styles from './HeaderCartButton.module.scss';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = ({ onShow }) => {
  // bump 애니메이션을 제어하는 상태 변수
  const [isBump, setIsBump] = useState(false);

  const { button, icon, badge, bump } = styles; // 객체 디스트럭처링한 상태로 바로 지목해서 쓸 수 있다.

  const { items } = useContext(CartContext);
  const numberOfCart = items.reduce((accu, item) => accu + item.amount, 0); // 장바구니에 넣은 항목 전체 수

  useEffect(() => {
    if (items.length === 0) return;
    console.log('useEffect in CartBtn!');
    setIsBump(true);

    // 다음 담기 애니메이션을 위해 bump 클래스 이름 제거
    // 애니메이션 동작 시간까지 기다려 주자(300ms)
    const aniTimer = setTimeout(() => {
      setIsBump(false);
    }, 300);

    return () => {
      clearTimeout(aniTimer);
    };
  }, [items]);

  return (
    <button className={`${button} ${isBump ? bump : ''}`} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;
