import React from 'react';

// 로그인 상태 변수를 관리할 컨텍스트
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, // 함수도 context 저장이 가능하다
});

export default AuthContext;