import React from 'react';
// 카트에 담기거나 제외되는 항목들을 전역 상태 관리하는 컨텍스트
// 저장소에는 컨텍스트에 들어가는 초기 객체는 뭘 담을 것인지에 대한 정의만 담으면 된다.
// 자세한 내용은 provider에서 만든다.

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
