import logo from './logo.svg';
import './App.css';
import NoName from './NoName';

function App() {

  const $h2 = <h2>반가워요~</h2>; //렌더링 과정에서 HTML로 변환되는 것이지 지금은 HTML이 아닌 JS 문법이다.

  return (
    <>
      <NoName />
      <div className='App'>
        <h1>메롱메롱~</h1>
        {$h2}
      </div>
      <div className='noname'>
        <input type='text'/>
        <p>
          오늘은 5월 1일 수요일입니다. <br></br>
          오후 3시 30분입니다.
        </p>
      </div>
    </>
  );
}

export default App;
